import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { LoginDtoService } from './login-dto.service';
import { CreateLoginDtoDto } from './dto/create-login-dto.dto';
import { UpdateLoginDtoDto } from './dto/update-login-dto.dto';

@Controller('login-dto')
export class LoginDtoController {
  constructor(private readonly loginDtoService: LoginDtoService) {}

  @Post('login')
  async checkLogin(@Body() createCatDtoDto: CreateLoginDtoDto): Promise<any> {
    return this.loginDtoService.checkLogin(createCatDtoDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginDtoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLoginDtoDto: UpdateLoginDtoDto,
  ) {
    return this.loginDtoService.update(+id, updateLoginDtoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginDtoService.remove(+id);
  }
}
