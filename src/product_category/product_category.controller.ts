import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { product_category } from 'models';
import { ProductCategoryService } from './product_category.service';

@Controller('product-category')
export class ProductCategoryController {
  constructor(
    private readonly product_categoryService: ProductCategoryService,
  ) {}
  @Get('All')
  async getPC(): Promise<product_category[]> {
    return this.product_categoryService.findPC();
  }
  @Post('Input')
  async inputPC(@Body() fields: product_category): Promise<any> {
    return this.product_categoryService.InsertPC(fields);
  }
  @Put('updatePC/:id')
  async updatePC(
    @Param('id') id: number,
    @Body() fields: product_category,
  ): Promise<any> {
    return this.product_categoryService.UpdatePC(id, fields);
  }
}
