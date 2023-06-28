import { Injectable } from '@nestjs/common';
import { customer } from 'models';

@Injectable()
export class CustomerService {
  async getCust(): Promise<customer[]> {
    try {
      const result = await customer.findAll();
      return result;
    } catch (error) {
      return error.message;
    }
  }
}

// async findAll(): Promise<users[]> {
//     try {
//       const result = await users.findAll();
//       return result;
//     } catch (error) {
//       return error.message;
//     }
//   }
