import { Module } from '@nestjs/common';
import { OrdersDetailDtoService } from './orders-detail-dto.service';
import { OrdersDetailDtoController } from './orders-detail-dto.controller';

@Module({
  controllers: [OrdersDetailDtoController],
  providers: [OrdersDetailDtoService]
})
export class OrdersDetailDtoModule {}
