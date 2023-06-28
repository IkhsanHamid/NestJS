import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDtoDto {
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
