import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipeBuilder,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { ProductDtoService } from './product-dto.service';
import { CreateProductDtoDto } from './dto/create-product-dto.dto';
import { UpdateProductDtoDto } from './dto/update-product-dto.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as crypto from 'crypto';
// import { diskStorage } from 'multer';

@Controller('product-dto')
export class ProductDtoController {
  constructor(private readonly productDtoService: ProductDtoService) {}

  @Post('uploads')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: 'image',
        filename: (req, file, callback) => {
          const salt =
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
          const imageNameWithSalt = file.originalname + salt;
          const md5Hash = crypto
            .createHmac('md5', '1234')
            .update(imageNameWithSalt)
            .digest('base64');
          const filename = `${md5Hash}_${file.originalname}`;
          callback(null, filename);
          // console.log(file.buffer);
        },
      }),
    }),
  )
  create(
    @Body() createProductDtoDto: CreateProductDtoDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpg|jpeg|png|gif|jfif',
        })
        .addMaxSizeValidator({
          maxSize: 100000, //dalam kb
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
  ) {
    console.log(file);
    createProductDtoDto.image = file.filename;
    return this.productDtoService.createProduct(createProductDtoDto);
  }

  @Get('AllProducts')
  findAll() {
    return this.productDtoService.findAll();
  }

  @Get('findone/:id')
  findOne(@Param('id') id: string) {
    return this.productDtoService.findOne(+id);
  }

  @Put('updateProduct/:id')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './image',
        filename: (req, file, callback) => {
          const salt =
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
          const imageNameWithSalt = file.originalname + salt;
          const md5Hash = crypto
            .createHmac('md5', '1234')
            .update(imageNameWithSalt)
            .digest('base64');
          const filename = `${md5Hash}_${file.originalname}`;
          callback(null, filename);
          // console.log(file.buffer);
        },
      }),
    }),
  )
  update(
    @Param('id') id: string,
    @Body() updateProductDtoDto: UpdateProductDtoDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpg|jpeg|png|gif|jfif',
        })
        .addMaxSizeValidator({
          maxSize: 100000, //dalam kb
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
  ) {
    updateProductDtoDto.image = file.filename;
    return this.productDtoService.update(+id, updateProductDtoDto, file);
  }

  @Delete('deleteProduct/:id')
  remove(@Param('id') id: string) {
    return this.productDtoService.remove(+id);
  }
}
