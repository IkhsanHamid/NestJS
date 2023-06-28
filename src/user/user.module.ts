import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize/dist';
import { customer, users } from 'models';

@Module({
  imports: [SequelizeModule.forFeature([users, customer])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
