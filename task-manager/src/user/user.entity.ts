import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateUserDTO } from './createuser.dto';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  constructor(userDTO: CreateUserDTO) {
    this.id = userDTO.id;
    this.firstName = userDTO.firstName;
    this.lastName = userDTO.lastName;
    this.email = userDTO.email;
    this.password = userDTO.password;
  }
}
