import { Injectable } from '@nestjs/common';
import { UpdateCustomerDtoDto } from './dto/update-customer-dto.dto';
import { customer, users } from 'models';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class CustomerDtoService {
  constructor(private sequelize: Sequelize) {}
  // create(createCustomerDtoDto: CreateCustomerDtoDto) {
  //   return 'This action adds a new customerDto';
  // }

  async findAll(): Promise<any> {
    try {
      // const result = await customer.findAll({
      //   include: [
      //     {
      //       model: users,
      //       as: 'user',
      //     },
      //   ],
      // });
      const result = await this.sequelize.query(
        `SELECT *
        from customer join users on customer.user_id = users.id`,
      );
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      const result = await customer.findOne({ where: { id: id } });
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateCustomerDtoDto: UpdateCustomerDtoDto) {
    try {
      const result = await customer.update(
        {
          firstname: updateCustomerDtoDto.firstname,
          lastname: updateCustomerDtoDto.lastname,
        },
        { where: { id: id }, returning: true },
      );
      return result;
    } catch (error) {
      return error.message;
    }
  }
}
