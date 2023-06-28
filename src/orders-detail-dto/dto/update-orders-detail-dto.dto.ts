import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdersDetail } from './create-orders-detail-dto.dto';

export class UpdateOrdersDetailDtoDto extends PartialType(CreateOrdersDetail) {}
