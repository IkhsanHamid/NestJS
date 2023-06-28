import { Injectable } from '@nestjs/common';
import { CreateOrdersDtoDto } from './dto/create-orders-dto.dto';
import { UpdateOrdersDtoDto } from './dto/update-orders-dto.dto';
import { order_detail, orders } from 'models';

@Injectable()
export class OrdersDtoService {
  create(createOrdersDtoDto: CreateOrdersDtoDto) {
    return 'This action adds a new ordersDto';
  }

  async findAll() {
    try {
      const result = await orders.findAll({
        include: [
          {
            model: order_detail,
            as: 'order_details',
          },
        ],
      });
      return {
        status: 200,
        result: result,
      };
    } catch (error) {
      return {
        status: 404,
        error: error.message,
      };
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} ordersDto`;
  }

  update(id: number, updateOrdersDtoDto: UpdateOrdersDtoDto) {
    return `This action updates a #${id} ordersDto`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordersDto`;
  }
}
