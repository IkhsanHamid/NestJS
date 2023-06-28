import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CustomerDtoService } from './customer-dto.service';
// import { CreateCustomerDtoDto } from './dto/create-customer-dto.dto';
import { UpdateCustomerDtoDto } from './dto/update-customer-dto.dto';

@Controller('customer-dto')
export class CustomerDtoController {
  constructor(private readonly customerDtoService: CustomerDtoService) {}

  // @Post()
  // create(@Body() createCustomerDtoDto: CreateCustomerDtoDto) {
  //   return this.customerDtoService.create(createCustomerDtoDto);
  // }

  @Get('findAllCustomer')
  findAll(): Promise<any> {
    return this.customerDtoService.findAll();
  }

  @Get('findOneCustomer/:id')
  findOne(@Param('id') id: string) {
    return this.customerDtoService.findOne(+id);
  }

  @Put('updateCustomer/:id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDtoDto: UpdateCustomerDtoDto,
  ) {
    return this.customerDtoService.update(+id, updateCustomerDtoDto);
  }
}
