import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() body: CreateUserDto) {
    const generatedId = await this.usersService.register(
      body.username,
      body.password,
    );
    console.log('new user created: ' + body.username);
    return { id: generatedId };
  }

  /** Making sure that the addressed user indeed exists.
   */
  @Get(':recipient')
  async getUser(@Param('recipient') recipient: string): Promise<boolean> {
    const userExists: User | false = await this.usersService.findUserByName(
      recipient,
    );
    return !!userExists;
  }
}
