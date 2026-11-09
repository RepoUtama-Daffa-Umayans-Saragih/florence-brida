import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Variabel untuk menyimpan cache server agar tidak restart di setiap request
let cachedServer: any;

async function bootstrap() {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule);
    
    // Controllers define their full /api/v1 paths; don't add a second global prefix.
    app.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    });
    
    await app.init();
    cachedServer = app.getHttpAdapter().getInstance();
  }
  return cachedServer;
}

// WAJIB menggunakan 'export default' untuk Vercel
export default async function (req: any, res: any) {
  const server = await bootstrap();
  return server(req, res);
}