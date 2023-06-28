import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CatDtoService } from './cat-dto.service';
import { CreateCatDtoDto } from './dto/create-cat-dto.dto';
import { UpdateCatDtoDto } from './dto/update-cat-dto.dto';
// import { Roles } from 'src/authGuard/roles.decorator';
// import { Role } from 'src/authGuard/enum';

@Controller('cat-dto')
export class CatDtoController {
  constructor(private readonly catDtoService: CatDtoService) {}

  @Post('insert')
  create(@Body() createCatDtoDto: CreateCatDtoDto) {
    return this.catDtoService.create(createCatDtoDto);
  }

  @Get('getdata')
  // @Roles(Role.Admin)
  findAll() {
    return this.catDtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catDtoService.findOne(+id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateCatDtoDto: UpdateCatDtoDto) {
    return this.catDtoService.update(+id, updateCatDtoDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.catDtoService.remove(+id);
  }
}
