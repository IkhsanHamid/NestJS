import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import { CreateLoginDtoDto } from './dto/create-login-dto.dto';
import { UpdateLoginDtoDto } from './dto/update-login-dto.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { users } from 'models';

@Injectable()
export class LoginDtoService {
  async checkToken(token: string): Promise<any> {
    // try {
    //   const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    //   return decodedToken;
    // } catch (error) {
    //   return error.message;
    // }
  }

  async checkLogin(createLoginDtoDto: CreateLoginDtoDto): Promise<any> {
    try {
      const user = await users.findOne({
        where: {
          user_name: createLoginDtoDto.user_name,
        },
      });
      // console.log(user);
      if (!user) {
        throw new Error('Username salah');
      }
      const match = await bcrypt.compare(
        createLoginDtoDto.password,
        user.password,
      );
      if (match) {
        const token = jwt.sign(
          { user_name: user.user_name },
          process.env.SECRET_KEY,
          {
            expiresIn: 1 * 24 * 60 * 60 * 1000,
          },
        );
        return {
          status: 200,
          message: 'login sukses',
          token: token,
        };
      } else {
        return {
          status: 404,
          message: 'password salah',
        };
      }
    } catch (error) {
      return error.message;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} loginDto`;
  }

  update(id: number, updateLoginDtoDto: UpdateLoginDtoDto) {
    return `This action updates a #${id} loginDto`;
  }

  remove(id: number) {
    return `This action removes a #${id} loginDto`;
  }
}
