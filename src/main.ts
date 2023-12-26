import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors :true});


  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
<<<<<<< HEAD
  
=======
   
>>>>>>> 120dcb1f7bf228cff7e2f4e86290bbe14a98070a
  });
  await app.listen(3000);
}
bootstrap();
  
