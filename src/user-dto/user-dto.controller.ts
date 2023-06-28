import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserDtoService } from './user-dto.service';
import { CreateUserDtoDto } from './dto/create-user-dto.dto';
import { UpdateUserDtoDto } from './dto/update-user-dto.dto';

import { users } from 'models';
// import { AuthGuard } from 'src/authGuard/authGuard';
// import { Roles } from 'src/authGuard/roles.decorator';

@Controller('user-dto')
// @UseGuards(AuthGuard)
export class UserDtoController {
  constructor(private readonly userDtoService: UserDtoService) {}

  @Post('InsertUser')
  create(@Body() createUserDtoDto: CreateUserDtoDto) {
    return this.userDtoService.create(createUserDtoDto);
  }

  @Get('Alluser')
  // @Roles('customer')
  findAll(): Promise<users[]> {
    return this.userDtoService.findAll();
  }

  @Get('findOneUser/:id')
  findOne(@Param('id') id: string) {
    return this.userDtoService.findOne(+id);
  }

  @Put('updateUser/:id')
  update(@Param('id') id: string, @Body() updateUserDtoDto: UpdateUserDtoDto) {
    return this.userDtoService.update(+id, updateUserDtoDto);
  }

  @Delete('deleteUser/:id')
  remove(@Param('id') id: string) {
    return this.userDtoService.remove(+id);
  }
}
