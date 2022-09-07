import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserdemoController } from './userdemo/userdemo.controller';
import { TestdemoModule } from './testdemo/testdemo.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [TestdemoModule, CatsModule],
  controllers: [AppController, UserdemoController],
  providers: [AppService],
})
export class AppModule {}
