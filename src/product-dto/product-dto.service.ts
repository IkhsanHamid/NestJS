import { Injectable } from '@nestjs/common';
import { CreateProductDtoDto } from './dto/create-product-dto.dto';
import { UpdateProductDtoDto } from './dto/update-product-dto.dto';
import { product } from 'models';
import * as fs from 'fs';
@Injectable()
export class ProductDtoService {
  async createProduct(createProductDtoDto: CreateProductDtoDto) {
    try {
      const result = await product.create(createProductDtoDto);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async findAll(): Promise<product[]> {
    try {
      const result = await product.findAll();
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      const result = await product.findOne({ where: { id: id } });
    } catch (error) {}
  }

  async update(
    id: number,
    updateProductDtoDto: UpdateProductDtoDto,
    file: Express.Multer.File,
  ) {
    try {
      const products = await product.findByPk(id);
      const data = './image/' + products.image;
      if (products && products.image) {
        if (fs.existsSync(data)) {
          fs.unlinkSync(data);
        }
        products.image = file.filename;
      } else {
        throw new Error(`id ${id} Not found!`);
      }
      const result = await product.update(updateProductDtoDto, {
        where: { id: id },
        returning: true,
      });
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      const data = await product.findOne({ where: { id: id } });
      console.log(data);
      // hapus image difolder image
      if (data && data.image) {
        // Hapus image jika ada
        const imagePath = './image/' + data.image;
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
      const result = await product.destroy({ where: { id: id } });
      // const result = await product.destroy({ where: { id: id } });
      // destroy semuanya
      return result;
    } catch (error) {
      return error.message;
    }
  }
}
