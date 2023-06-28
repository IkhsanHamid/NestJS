import { Injectable } from '@nestjs/common';
import { CreateCatDtoDto } from './dto/create-cat-dto.dto';
import { UpdateCatDtoDto } from './dto/update-cat-dto.dto';
import { product, product_category } from 'models';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class CatDtoService {
  constructor(private sequelize: Sequelize) {}
  async create(createCatDtoDto: CreateCatDtoDto) {
    try {
      const result = await product_category.create(createCatDtoDto);
      return {
        status: 200,
        result: result,
      };
    } catch (error) {}
  }

  async findAll() {
    try {
      // const result = await product_category.findAll();
      const result = await product_category.findAll();
      return {
        status: 200,
        result: result,
      };
    } catch (error) {
      return {
        status: 404,
        error: error.message,
      };
    }
  }

  async findOne(id: number) {
    try {
      const result = await product_category.findOne({ where: { id: id } });
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateCatDtoDto: UpdateCatDtoDto) {
    try {
      const result = await product_category.update(updateCatDtoDto, {
        where: { id: id },
        returning: true,
      });
      return {
        status: 200,
        result: result,
      };
    } catch (error) {
      return {
        status: 404,
        error: error.message,
      };
    }
  }

  async remove(id: number) {
    try {
      const result = await product_category.destroy({ where: { id: id } });
      return result;
    } catch (error) {
      return error.message;
    }
  }
}
