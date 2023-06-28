import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDtoDto {
  @IsNotEmpty()
  user_name: string;

  @IsNotEmpty()
  password: any;

  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;
}
