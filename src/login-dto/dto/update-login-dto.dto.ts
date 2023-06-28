import { PartialType } from '@nestjs/mapped-types';
import { CreateLoginDtoDto } from './create-login-dto.dto';

export class UpdateLoginDtoDto extends PartialType(CreateLoginDtoDto) {}
