import { Entity, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { classToPlain } from 'class-transformer';

enum Channel {
  YouTube = 1,
  Udemy = 2
}

@Entity()
export class Tutorial {
  @ObjectIdColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ enum: Channel, nullable: false })
  channel: string;

  @Column({ nullable: false })
  instructor: string;

  @Column({ nullable: false })
  duration: number;

  @Column({ nullable: false })
  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: false })
  @UpdateDateColumn()
  updatedAt: Date;

  toJSON(): any {
    return classToPlain(this);
  }
}
