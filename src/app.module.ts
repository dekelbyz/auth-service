import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

const MONGO_SECRET =
  'mongodb+srv://DekelDB:DekelDB12345@cluster0.fqj9l.mongodb.net/users?retryWrites=true&w=majority';
@Module({
  imports: [MongooseModule.forRoot(MONGO_SECRET), UsersModule, AuthModule],
})
export class AppModule {}
