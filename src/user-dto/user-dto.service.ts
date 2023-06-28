import { Injectable } from '@nestjs/common';
import { CreateUserDtoDto } from './dto/create-user-dto.dto';
import { UpdateUserDtoDto } from './dto/update-user-dto.dto';
import { customer, users } from 'models';
import { genSalt, hash } from 'bcrypt';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class UserDtoService {
  constructor(private sequelize: Sequelize) {}
  async create(createUserDtoDto: CreateUserDtoDto) {
    try {
      const salt = await genSalt(10);
      const passHash = await hash(createUserDtoDto.password, salt);
      const datas = {
        user_name: createUserDtoDto.user_name,
        password: passHash,
        firstname: createUserDtoDto.firstname,
        lastname: createUserDtoDto.lastname,
      };
      console.log(datas);
      const data = `[${JSON.stringify(datas)}]`;
      const query = `CALL public.insertdata ('${data}')`;
      const result = await this.sequelize.query(query);
      return 
      ;
    } catch (error) {
      return error.message;
    }
  }

  async findAll(): Promise<users[]> {
    try {
      const result = await users.findAll();
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      // const result = await users.findOne({
      //   where: { id: id },
      //   include: [
      //     {
      //       model: customer,
      //       as: 'customer',
      //       // where:{user_id:id}
      //       // required:true
      //     },
      //   ],
      // });
      const result = await this.sequelize.query(`SELECT 
      users.id, 
      users.user_name, 
      users.password, 
      users.roles,  
      customer.firstname, 
      customer.lastname, 
      customer.user_id, 
      FROM public.users 
      INNER JOIN public.customer ON users.id = customer.user_id AND customer.user_id = ${id} WHERE users.id = ${id};`)
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateUserDtoDto: UpdateUserDtoDto) {
    try {
      const salt = await genSalt(10);
      const passHash = await hash(updateUserDtoDto.password, salt);
      let transaction = await this.sequelize.transaction()
      const updatedUser = await users.update(
        {
          user_name: updateUserDtoDto.user_name,
          password: passHash,
          roles: 'customer',
        },
        {
          where: {
            id: id,
          },
          transaction,
          // returning: true,
        },
      )
      const updatedCustomer = await customer.update({
        firstname: updateUserDtoDto.firstname,
        lastname: updateUserDtoDto.lastname
      },
      {
        where:{user_id:id},
        transaction,
        // returning: true
      },
      )

      await transaction.commit()
      return {updatedUser, updatedCustomer}; 
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      const result = await users.destroy({ where: { id: id } });
      return result;
    } catch (error) {
      return error.message;
    }
  }
}
