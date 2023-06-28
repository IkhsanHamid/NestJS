import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDtoDto } from './create-cat-dto.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCatDtoDto extends PartialType(CreateCatDtoDto) {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}
