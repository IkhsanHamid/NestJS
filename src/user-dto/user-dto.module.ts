import { Module } from '@nestjs/common';
import { UserDtoService } from './user-dto.service';
import { UserDtoController } from './user-dto.controller';
import { customer, users } from 'models';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([users, customer])],
  controllers: [UserDtoController],
  providers: [UserDtoService],
})
export class UserDtoModule {}
