import 'dotenv/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from './authGuard/authGuard';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.use('/image', express.static('image'))
  app.useGlobalGuards(new AuthGuard(new Reflector()));
  app.enableCors()
  const port = process.env.PORT;
  await app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
  });
}
bootstrap();
