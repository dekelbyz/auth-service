import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findUserByName(username);

    /**using bcrypt in order to
     * compare between the hashed password in our db
     * and the one that the user is trying to login with
     */
    const passwordMatchesToHash = await compare(pass, user.password);

    if (user && passwordMatchesToHash) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

  async login(user: any) {
    const validUser = await this.validateUser(user.username, user.password);

    if (!validUser) return;
    return {
      access_token: this.jwtService.sign({
        sub: validUser._id.toString(),
        username: validUser.username,
      }),
    };
  }
}
