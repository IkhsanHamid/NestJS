import { Module } from '@nestjs/common';
import { LoginDtoService } from './login-dto.service';
import { LoginDtoController } from './login-dto.controller';
import { users } from 'models';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([users])],
  controllers: [LoginDtoController],
  providers: [LoginDtoService],
})
export class LoginDtoModule {}
