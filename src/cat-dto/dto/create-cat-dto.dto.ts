import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCatDtoDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
