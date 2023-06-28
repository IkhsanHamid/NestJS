import { Module } from '@nestjs/common';
import { CustomerDtoService } from './customer-dto.service';
import { CustomerDtoController } from './customer-dto.controller';
import { customer } from 'models';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([customer])],
  controllers: [CustomerDtoController],
  providers: [CustomerDtoService],
})
export class CustomerDtoModule {}
