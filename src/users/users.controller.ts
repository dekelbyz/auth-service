import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  /* Extracting our body params by using the body decorator.  */
  async register(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const generatedId = await this.usersService.register(username, password);
    return { id: generatedId };
  }

  @Get(':recipient')
  async getUser(@Param('recipient') recipient: string) {
    const userExists = await this.usersService.findUserByName(recipient);
    return !!userExists;
  }
}
