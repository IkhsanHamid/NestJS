import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdersDetailDtoService } from './orders-detail-dto.service';
import { CreateOrdersDetail } from './dto/create-orders-detail-dto.dto';
import { UpdateOrdersDetailDtoDto } from './dto/update-orders-detail-dto.dto';

@Controller('orders-detail-dto')
export class OrdersDetailDtoController {
  constructor(
    private readonly ordersDetailDtoService: OrdersDetailDtoService,
  ) {}

  @Post('insertOrders')
  create(@Body() createOrdersDetail: CreateOrdersDetail[]) {
    return this.ordersDetailDtoService.create(createOrdersDetail);
  }

  @Get()
  findAll() {
    return this.ordersDetailDtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersDetailDtoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrdersDetailDtoDto: UpdateOrdersDetailDtoDto,
  ) {
    return this.ordersDetailDtoService.update(+id, updateOrdersDetailDtoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersDetailDtoService.remove(+id);
  }
}
