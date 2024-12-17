import { User } from './user.entity';

export class DisplayUserDTO {
  firstName: string;
  lastName: string;
  email: string;

  constructor(user: User) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
  }
}
