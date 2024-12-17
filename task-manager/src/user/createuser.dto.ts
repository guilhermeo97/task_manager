import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateUserDTO {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
