import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateOrdersDetail {
  @IsNotEmpty()
  user_id: number;
  @IsNotEmpty()
  product_id: number;
  @IsNotEmpty()
  quantity: number;
  @IsNotEmpty()
  price: number;
  totalproduct?: string;
  totalprice?: string;
}
