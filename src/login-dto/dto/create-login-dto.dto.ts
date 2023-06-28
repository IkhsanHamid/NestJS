import { IsNotEmpty } from 'class-validator';

export class CreateLoginDtoDto {
  @IsNotEmpty()
  user_name: string;

  @IsNotEmpty()
  password: string;
}
