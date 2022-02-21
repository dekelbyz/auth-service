import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  /** does not mean anything at this moment. */
  async register(username: string, password: string) {
    const newUser = new this.userModel({
      username,
      password,
    });
    const result = await newUser.save();
    return result.id as string;
  }

  async findUserByName(username: string): Promise<User> {
    return await this.userModel.findOne({ username: username }).exec();
  }
}
