import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle('API Todo')
    .setDescription("Documentation de l'API des todos")
    .setVersion('1.0')
    .addBearerAuth() // Ajoute l'authentification par token (facultatif)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Accès à Swagger via /api

  await app.listen(3000);
}
bootstrap();
