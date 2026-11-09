"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
let cachedServer;
async function bootstrap() {
    if (!cachedServer) {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
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
async function default_1(req, res) {
    const server = await bootstrap();
    return server(req, res);
}
//# sourceMappingURL=serverless.js.map