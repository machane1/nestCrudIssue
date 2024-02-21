import { NestFactory } from '@nestjs/core';
import { CrudConfigService } from '@nestjsx/crud';

// CrudConfigService.load({
//   routes:{only: ['getManyBase','getOneBase']}
// })

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
