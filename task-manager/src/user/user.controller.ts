import { UserService } from './user.service';
import { CreateUserDTO } from './createuser.dto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userDTO: CreateUserDTO) {
    const user = this.userService.create(userDTO);
    return user;
  }
}
