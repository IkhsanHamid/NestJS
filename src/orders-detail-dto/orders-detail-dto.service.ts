import { Injectable } from '@nestjs/common';
import { CreateOrdersDetail } from './dto/create-orders-detail-dto.dto';
import { UpdateOrdersDetailDtoDto } from './dto/update-orders-detail-dto.dto';
import { Sequelize } from 'sequelize-typescript';
import sequelize from 'sequelize';

@Injectable()
export class OrdersDetailDtoService {
  constructor(private sequelize: Sequelize) {}
  async create(createOrdersDetail: CreateOrdersDetail[]): Promise<any> {
    try {
      const datas = createOrdersDetail;
      let totalproduct = 0;
      let totalprice = 0;
      let user_id = 0;
      datas.map((data): any => {
        user_id = data.user_id;
        totalprice += data.price * data.quantity;
        totalproduct += data.quantity;
      });
      console.log(datas);
      let data1 = {
        user_id: user_id,
        totalprice: totalprice,
        totalproduct: totalproduct,
      };
      console.log(data1);
      const paramdt = `[${JSON.stringify(data1)}]`;
      const paramdatas = `${JSON.stringify(datas)}`;
      const query = `CALL InsertOrderandOrderdetail('${paramdt}', '${paramdatas}')`;
      const result = await this.sequelize.query(query);
      return result;
    } catch (error) {}
  }

  findAll() {
    return `This action returns all ordersDetailDto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordersDetailDto`;
  }

  update(id: number, updateOrdersDetailDtoDto: UpdateOrdersDetailDtoDto) {
    return `This action updates a #${id} ordersDetailDto`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordersDetailDto`;
  }
}
