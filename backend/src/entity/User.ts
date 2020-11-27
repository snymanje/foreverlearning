import { IUser } from './../interfaces/user.interfaces';
import { Entity, ObjectIdColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import { Length, IsEmail } from 'class-validator';
import { classToPlain, Exclude } from 'class-transformer';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

@Entity()
@Unique(['email'])
export class User {
  @ObjectIdColumn()
  id: number;

  @Column({ default: 'local', nullable: true })
  authMethod: string;

  @Column({ default: false })
  active: boolean;

  @Column({ default: 'user', nullable: false })
  role: string;

  @Column()
  @Length(4, 20, {
    message: 'Length must be between 4 and 20 characters, please.'
  })
  name: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: false })
  @IsEmail(
    {},
    {
      message: 'Please provide a valid email address.'
    }
  )
  email: string;

  @Column({ nullable: true })
  googleId: string;

  @Column({ nullable: true })
  accountActivationToken: string;

  @Exclude()
  @Column({ nullable: true })
  accountActivationExpires: Date;

  @Column({ nullable: true })
  passwordResetToken: string;

  @Column({ nullable: true })
  passwordResetExpires: Date;

  @Column({ nullable: false })
  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  passwordChangedAt: Date;

  @Column({ nullable: false })
  @UpdateDateColumn()
  updatedAt: Date;

  async activateAccount(): Promise<void> {
    this.active = true;
    this.accountActivationExpires = new Date(Date.now());
    this.accountActivationToken = null;
  }

  async updatePassword(password: string): Promise<void> {
    this.passwordChangedAt = new Date(Date.now());
    this.password = await bcrypt.hash(password, 12);
    this.passwordResetToken = null;
    this.passwordResetExpires = null;
  }

  @BeforeInsert()
  async hashLocalPasswordBefore(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordChangedAt = new Date(Date.now());
  }

  async checkIfUnencryptedPasswordIsValid(unencryptedPassword: string): Promise<boolean> {
    return bcrypt.compare(unencryptedPassword, this.password);
  }

  async createAccountActivationToken(): Promise<string> {
    const activationToken = await crypto.randomBytes(32).toString('hex');
    this.accountActivationToken = crypto.createHash('sha256').update(activationToken).digest('hex');
    this.accountActivationExpires = new Date(Date.now() + 10 * 60 * 1000);
    return activationToken;
  }

  async changedPasswordAfter(JWTTimestamp: number): Promise<boolean> {
    if (this.passwordChangedAt) {
      const changedTimestamp = Number((this.passwordChangedAt.getTime() / 1000, 10));
      return JWTTimestamp < changedTimestamp;
    }
  }

  async isVerified(): Promise<boolean> {
    return this.active && this.passwordResetExpires === undefined;
  }

  async createPasswordResettoken(): Promise<string> {
    const resetToken = await crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = await crypto.createHash('sha256').update(resetToken).digest('hex');

    this.passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000);

    return resetToken;
  }

  toJSON(): any {
    return classToPlain(this);
  }

  toClientUserData(): IUser {
    return {
      id: this.id,
      authMethod: this.authMethod,
      role: this.role,
      name: this.name,
      email: this.email
    };
  }
}
