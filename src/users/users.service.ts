import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { hash, genSalt } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async register(username: string, password: string) {
    /* username must be unique. */
    const alreadyExistsUser = await this.findUserByName(username);
    if (alreadyExistsUser)
      throw new BadRequestException('username already exists');

    /* using bcrypt package to hash our password. */
    const hashedPassword = await hash(password, await genSalt());

    /* adding our new user to 'users' collection on our mongoDB
      using the built-in save() method provided to us by mongoose. */
    const newUser = new this.userModel({
      username,
      password: hashedPassword,
    });
    const result = await newUser.save();
    return result.id as string;
  }

  async findUserByName(username: string) {
    return (
      await this.userModel.findOne({ username: username }).exec()
    )?.toObject();
  }
}
