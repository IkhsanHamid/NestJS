import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDtoDto } from './create-user-dto.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserDtoDto extends PartialType(CreateUserDtoDto) {
  @IsNotEmpty()
  user_name: string;
  @IsNotEmpty()
  password: any;
  @IsNotEmpty()
  firstname: any;
  @IsNotEmpty()
  lastname: any;

}
