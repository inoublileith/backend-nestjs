import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, { cors: true });

    // Enable global validation pipe
    app.useGlobalPipes(new ValidationPipe());

    // Enable CORS (Cross-Origin Resource Sharing)
    app.enableCors();

    // Listen on the specified port or use a default (e.g., 3000)
    const port = process.env.PORT || 3005;

    // Start the application
    await app.listen(3005);

    console.log(`Application is running on: http://localhost:${port}`);
  } catch (error) {
    console.error('Error starting the NestJS application:', error);
  }
}

bootstrap();
