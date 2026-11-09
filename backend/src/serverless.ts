import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Variabel untuk menyimpan cache server agar tidak restart di setiap request
let cachedServer: any;

async function bootstrap() {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule);
    
    // Prefix dan CORS yang sudah kita atur sebelumnya
    app.setGlobalPrefix('api/v1');
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