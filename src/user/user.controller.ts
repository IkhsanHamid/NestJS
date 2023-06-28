import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { customer, users } from 'models';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('hello')
  async getAll(): Promise<users[]> {
    return this.userService.findAll();
  }

  @Get('JoinCustUs')
  async getJoin(): Promise<any> {
    return this.userService.findJoin();
  }

  @Post('Insert')
  async Insert(@Body() fields: users, @Body() fields2: customer): Promise<any> {
    return this.userService.Insertdata(fields, fields2);
  }

  @Post('InsertSP')
  async InsertSP(@Body() fields: any): Promise<any> {
    return this.userService.InsertSP(fields);
  }
}
