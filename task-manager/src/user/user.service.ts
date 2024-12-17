import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDTO } from './createuser.dto';
import { DisplayUserDTO } from './displayuser.dto';

@Injectable()
export class UserService {
  private users: User[] = [];
  private idCounter = 0;

  create(userDto: CreateUserDTO) {
    const newUser = new User(userDto);
    newUser.id = this.idCounter++;
    newUser.isActive = true;
    this.users.push(newUser);
    const displayUser = new DisplayUserDTO(newUser);
    return displayUser;
  }
}
