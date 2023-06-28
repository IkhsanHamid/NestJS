import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerDtoDto {
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;
}
