import 'dotenv/config';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductCategoryModule } from './product_category/product_category.module';
import { CatDtoModule } from './cat-dto/cat-dto.module';
import { ProductDtoModule } from './product-dto/product-dto.module';
import { UserDtoModule } from './user-dto/user-dto.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import path, { join } from 'path';
import { CustomerDtoModule } from './customer-dto/customer-dto.module';
import { OrdersDtoModule } from './orders-dto/orders-dto.module';
import { OrdersDetailDtoModule } from './orders-detail-dto/orders-detail-dto.module';
import { LoginDtoModule } from './login-dto/login-dto.module';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { AuthGuard } from './authGuard/authGuard';
// import { LoggerMiddleware } from './middleware/logeer-middleware';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'postgres',
        host: process.env.HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE,
        models: [],

        autoLoadModels: true,
      }),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'image'),
    }),
    UserModule,
    CustomerModule,
    ProductCategoryModule,
    CatDtoModule,
    ProductDtoModule,
    UserDtoModule,
    CustomerDtoModule,
    OrdersDtoModule,
    OrdersDetailDtoModule,
    LoginDtoModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    Reflector,
    // {
    //   provide: 'ROLES_METADATA',
    //   useValue: Roles('admin', 'user'),
    // },
  ],
})
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .exclude(
//         { path: 'login-dto', method: RequestMethod.POST },
//         'login-dto/(.*)',
//         { path: 'orders-dto', method: RequestMethod.GET },
//         'orders-dto/(.*)',
//       )
//       .forRoutes('*');
//   }
// }
export class AppModule {}
