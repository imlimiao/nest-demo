import { Module } from '@nestjs/common';
import { TestdemoService } from './testdemo.service';
import { TestdemoController } from './testdemo.controller';
import { CatsService } from '../cats/cats.service';
@Module({
  controllers: [TestdemoController],
  providers: [TestdemoService, CatsService],
})
export class TestdemoModule {}
