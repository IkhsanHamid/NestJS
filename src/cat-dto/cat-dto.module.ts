import { Module } from '@nestjs/common';
import { CatDtoService } from './cat-dto.service';
import { CatDtoController } from './cat-dto.controller';
import { product_category } from 'models';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([product_category])],
  controllers: [CatDtoController],
  providers: [CatDtoService],
})
export class CatDtoModule {}
