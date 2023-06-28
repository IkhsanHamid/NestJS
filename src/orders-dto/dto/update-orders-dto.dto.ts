import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdersDtoDto } from './create-orders-dto.dto';

export class UpdateOrdersDtoDto extends PartialType(CreateOrdersDtoDto) {}
