import { Test, TestingModule } from '@nestjs/testing';
import { TestdemoController } from './testdemo.controller';
import { TestdemoService } from './testdemo.service';

describe('TestdemoController', () => {
  let controller: TestdemoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestdemoController],
      providers: [TestdemoService],
    }).compile();

    controller = module.get<TestdemoController>(TestdemoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
