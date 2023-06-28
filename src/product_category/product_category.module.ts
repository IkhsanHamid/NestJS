import { Module } from '@nestjs/common';
import { ProductCategoryService } from './product_category.service';
import { ProductCategoryController } from './product_category.controller';
import { product_category } from 'models';
import { SequelizeModule } from '@nestjs/sequelize/dist';

@Module({
  imports: [SequelizeModule.forFeature([product_category])],
  providers: [ProductCategoryService],
  controllers: [ProductCategoryController],
})
export class ProductCategoryModule {}
