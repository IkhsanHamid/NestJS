import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdersDtoService } from './orders-dto.service';
import { CreateOrdersDtoDto } from './dto/create-orders-dto.dto';
import { UpdateOrdersDtoDto } from './dto/update-orders-dto.dto';

@Controller('orders-dto')
export class OrdersDtoController {
  constructor(private readonly ordersDtoService: OrdersDtoService) {}

  @Post()
  create(@Body() createOrdersDtoDto: CreateOrdersDtoDto) {
    return this.ordersDtoService.create(createOrdersDtoDto);
  }

  @Get('all')
  findAll() {
    return this.ordersDtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersDtoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrdersDtoDto: UpdateOrdersDtoDto,
  ) {
    return this.ordersDtoService.update(+id, updateOrdersDtoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersDtoService.remove(+id);
  }
}
