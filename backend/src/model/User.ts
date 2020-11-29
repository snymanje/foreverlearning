import { IUser } from './../interfaces/user.interfaces';
import { model, Schema, Model, HookNextFunction } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const userSchema: Schema = new Schema(
  {
    method: {
      type: String,
      enum: ['local', 'google'],
      required: [true, 'Authentication method is not specified.']
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    active: {
      type: Boolean,
      default: false
    },
    accountActivationToken: {
      type: String
    },
    accountActivationExpires: {
      type: Date
    },
    name: {
      type: String,
      // required: [true, 'Your name is required.'],
      trim: true
    },
    email: {
      type: String,
      require: [true, 'Please add you email address.'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
      type: String,
      // required: [true, 'Please provide a password'],
      minlength: 8
    },
    passwordChangedAt: {
      type: Date
    },
    passwordResetToken: {
      type: String
    },
    passwordResetExpires: {
      type: Date,
      default: undefined
    },
    googleId: {
      type: String
    }
  },
  { timestamps: true }
);

userSchema.virtual('isVerified').get(function () {
  return this.active && this.passwordResetExpires === undefined;
});

userSchema.pre<IUser>('save', async function (next) {
  try {
    if (this.method !== 'local') {
      next();
    }
    if (!this.isModified('password') || this.isNew) return next();
    this.passwordChangedAt = new Date(Date.now() - 1000);
    next();
  } catch (error) {
    return error;
  }
});

userSchema.pre<IUser>('save', async function (next: HookNextFunction) {
  try {
    if (this.method !== 'local') {
      return next();
    }
    // only runs if password was modified
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    // this.passwordConfirm = undefined; // We don't want to persist the confirm pass to DB - only used for validation

    next();
  } catch (error) {
    return error;
  }
});

userSchema.methods.checkIfUnencryptedPasswordIsValid = async function (unencryptedPassword: string): Promise<boolean> {
  try {
    return bcrypt.compare(unencryptedPassword, this.password);
  } catch (err) {
    return err;
  }
};

userSchema.methods.updatePassword = async function (password: string) {
  try {
    this.passwordChangedAt = new Date(Date.now());
    this.password = password;
    this.passwordResetToken = undefined;
    this.passwordResetExpires = undefined;
  } catch (err) {
    return err;
  }
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp: number, next: HookNextFunction) {
  try {
    if (this.method !== 'local') {
      next();
    }
    if (this.passwordChangedAt) {
      const changedTimestamp = Number(this.passwordChangedAt.getTime() / 1000);
      return JWTTimestamp < changedTimestamp;
    }
    // Not changed
    return false;
  } catch (error) {
    return error;
  }
};

userSchema.methods.createPasswordResettoken = async function () {
  try {
    const resetToken = await crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = await crypto.createHash('sha256').update(resetToken).digest('hex');

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
  } catch (err) {
    return err;
  }
};

userSchema.methods.createAccountActivationToken = async function () {
  try {
    const activationToken = await crypto.randomBytes(32).toString('hex');
    this.accountActivationToken = await crypto.createHash('sha256').update(activationToken).digest('hex');

    this.accountActivationExpires = Date.now() + 10 * 60 * 1000;

    return activationToken;
  } catch (err) {
    return err;
  }
};

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    // remove these props when object is serialized
    delete ret._id;
    delete ret.password;
    delete ret.passwordChangedAt;
    delete ret.passwordResetToken;
    delete ret.passwordResetExpires;
    delete ret.accountActivationToken;
    delete ret.accountActivationExpires;
  }
});

// Model names always start with capital letter
const User: Model<IUser> = model('User', userSchema);

export default User;
