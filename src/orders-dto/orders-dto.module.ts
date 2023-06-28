import { Module } from '@nestjs/common';
import { OrdersDtoService } from './orders-dto.service';
import { OrdersDtoController } from './orders-dto.controller';
import { order_detail, orders } from 'models';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([orders, order_detail])],
  controllers: [OrdersDtoController],
  providers: [OrdersDtoService],
})
export class OrdersDtoModule {}
