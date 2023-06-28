import { Injectable } from '@nestjs/common';
import { customer, users } from 'models';
import { hash, genSalt } from 'bcrypt';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class UserService {
  //   getUser(): string {
  //     try {
  //       return 'Hello World User';
  //     } catch (error) {
  //       return `${error.message}`;
  //     }
  //   }

  //   const test = await this.sequelize.query(`select * from getrow)
  constructor(private sequelize: Sequelize) {}
  async findAll(): Promise<users[]> {
    try {
      const result = await users.findAll();
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async findJoin():Promise<any> {
    try {
      // const awal = fields.awal
      // const akhir = fields.akhir
      const result = await this.sequelize.query(`select users.id, users.user_name, customer.firstname, customer.lastname from users join customer on users.id = customer.user_id`)
      return result[0];
    } catch (error) {
      return error.message;
    }
  }

  async Insertdata(fields: users, fields2: customer): Promise<any> {
    let result: any;
    try {
      const salt = await genSalt(10);
      const passHash = await hash(fields.password, salt);
      result = await users.create({
        user_name: fields.user_name,
        password: passHash,
      });
      let result2 = await customer.create({
        firstname: fields2.firstname,
        lastname: fields2.lastname,
        user_id: result.id,
      });
      return { result, result2, message: 'Sukses' };
    } catch (error) {
      if (result) {
        await result.destroy({
          where: {
            id: result.id,
          },
        });
        return {
          error: error.message,
          message: 'gagal membuat customer dan user telah dihapus',
        };
      }
    }
  }

  async InsertSP(fields: any): Promise<any> {
    try {
      const salt = await genSalt(10);
      const passHash = await hash(fields.password, salt);
      const datas = {
        user_name: fields.user_name,
        password: passHash,
        firstname: fields.firstname,
        lastname: fields.lastname,
      };
      console.log(datas);
      const data = `[${JSON.stringify(datas)}]`;
      const query = `CALL public.insertdata ('${data}')`;
      const result = await this.sequelize.query(query);
      return result;
    } catch (error) {
      return error.message;
    }
  }
}
