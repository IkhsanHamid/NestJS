import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDtoDto } from './create-customer-dto.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCustomerDtoDto extends PartialType(CreateCustomerDtoDto) {
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;
}
