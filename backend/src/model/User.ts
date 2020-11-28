import { model, Schema, Model, Document, HookNextFunction } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

interface IUser extends Document {
  method: string;
  role: string;
  active: boolean;
  accountActivationToken: string;
  accountActivationExpires: Date;
  name: string;
  email: string;
  password: string;
  passwordChangedAt: Date;
  passwordResetToken: string;
  passwordResetExpires: Date;
  googleId: string;
}

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
      minlength: 8,
      select: false // Will not be shown in queries
    },
    passwordChangedAt: {
      type: Date
    },
    passwordResetToken: {
      type: String
    },
    passwordResetExpires: {
      type: Date
    },
    googleId: {
      type: String
    }
  },
  { timestamps: true }
);

userSchema.virtual('isVerified').get(function () {
  return !(this.active && this.passwordResetExpires === undefined);
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
    next(error);
  }
});

userSchema.pre<IUser>('save', async function (next: HookNextFunction) {
  try {
    if (this.method !== 'local') {
      next();
    }
    // only runs if password was modified
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    // this.passwordConfirm = undefined; // We don't want to persist the confirm pass to DB - only used for validation

    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.correctPassword = async function (
  candidatePassword: string,
  userPassword: string,
  next: HookNextFunction
) {
  try {
    return bcrypt.compare(candidatePassword, userPassword);
  } catch (err) {
    next(err);
  }
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp: number, next: HookNextFunction) {
  try {
    if (this.method !== 'local') {
      next();
    }
    if (this.local.passwordChangedAt) {
      const changedTimestamp = Number(this.passwordChangedAt.getTime() / 1000);
      return JWTTimestamp < changedTimestamp;
    }
    // Not changed
    return false;
  } catch (error) {
    next(error);
  }
};

userSchema.methods.createPasswordResettoken = function (next: HookNextFunction) {
  try {
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.local.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    this.local.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
  } catch (err) {
    next(err);
  }
};

userSchema.methods.createAccountActivationToken = function (next: HookNextFunction) {
  try {
    const activationToken = crypto.randomBytes(32).toString('hex');
    this.accountActivationToken = crypto.createHash('sha256').update(activationToken).digest('hex');

    this.accountActivationExpires = Date.now() + 10 * 60 * 1000;

    return activationToken;
  } catch (err) {
    next(err);
  }
};

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    // remove these props when object is serialized
    // delete ret._id;
    delete ret.password;
  }
});

// Model names always start with capital letter
const User: Model<IUser> = model('User', userSchema);

export default User;
