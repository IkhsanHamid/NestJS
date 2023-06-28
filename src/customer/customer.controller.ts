import { Controller, Get } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { customer } from 'models';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Get('hello')
  getAll(): Promise<customer[]> {
    return this.customerService.getCust();
  }
}
