import { Injectable } from '@nestjs/common';
import { product_category } from 'models';

@Injectable()
export class ProductCategoryService {
  async findPC(): Promise<product_category[]> {
    try {
      const result = await product_category.findAll();
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async InsertPC(fields: product_category): Promise<any> {
    try {
      const result = await product_category.create({
        name: fields.name,
        description: fields.description,
      });
      return {
        status: 200,
        message: 'Data berhasil di input',
        result: result,
      };
    } catch (error) {
      return {
        status: 404,
        message: 'Gagal Input Data',
        error: error.message,
      };
    }
  }

  async UpdatePC(id: number, fields: product_category): Promise<any> {
    try {
      const result = await product_category.update(
        {
          name: fields.name,
          description: fields.description,
        },
        {
          where: {
            id: id,
          },
        },
      );
      return {
        status: 200,
        message: 'Data berhasil di update',
        result: result,
      };
    } catch (error) {
      return {
        status: 404,
        message: 'Gagal Update Data',
        error: error.message,
      };
    }
  }
}
