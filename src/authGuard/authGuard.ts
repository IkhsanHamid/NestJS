import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Inject,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as jwt from 'jsonwebtoken';
import { users } from 'models';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(Reflector) private reflector: Reflector) {}
  async canActivate(context: ExecutionContext) {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    try {
      if (!token) {
        throw new Error('silahkan login terlebih dahulu');
      }
      const decodedToken: any = jwt.verify(token, process.env.SECRET_KEY);
      console.log(decodedToken);
      const result: any = await users.findOne({
        where: {
          user_name: decodedToken.user_name,
        },
      });
      console.log(result);
      const userRole = result.roles;
      console.log(userRole);
      const hasRole = roles.some((role) => userRole.includes(role));
      if (!hasRole) {
        throw new UnauthorizedException('Forbidden Resource');
      }
      return true;
    } catch (error) {
      throw new ForbiddenException(error.message);
    }
  }
}
