import { IsString, MaxLength, MinLength, NotContains } from 'class-validator';

/**
 * Represents the object stracture our
 * controller expects to receive from the client
 * as he creates a new user
 */
export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(10)
  @NotContains(' ', {
    message: 'username cannot contain spaces.',
  })
  username: string;

  @IsString()
  @MinLength(3)
  @MaxLength(10)
  password: string;
}
