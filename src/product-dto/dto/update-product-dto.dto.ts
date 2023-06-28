import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDtoDto } from './create-product-dto.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProductDtoDto extends PartialType(CreateProductDtoDto) {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  category_id: number;

  @IsNotEmpty()
  @IsString()
  price: string;

  image: string;
}
