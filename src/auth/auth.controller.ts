import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/login-request.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() user: LoginRequestDto) {
    return this.authService.login(user);
  }

  /** making sure that the user's access_token is a valid JWT. */
  @UseGuards(JwtAuthGuard)
  @Get('validate')
  validateUser(@Request() req) {
    return req.user;
  }
}
