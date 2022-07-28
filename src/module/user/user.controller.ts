import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async find() {
    return await this.userService.find();
  }

  @Post('/')
  async create() {
    return await this.userService.create();
  }
}
