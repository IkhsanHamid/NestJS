import { Module } from '@nestjs/common';
import { ProductDtoService } from './product-dto.service';
import { ProductDtoController } from './product-dto.controller';
import { product } from 'models';
import { SequelizeModule } from '@nestjs/sequelize';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    SequelizeModule.forFeature([product]),
    MulterModule.register({
      dest: './image',
    }),
  ],
  controllers: [ProductDtoController],
  providers: [ProductDtoService],
})
export class ProductDtoModule {}
