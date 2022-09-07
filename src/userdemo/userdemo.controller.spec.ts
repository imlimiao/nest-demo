import { Test, TestingModule } from '@nestjs/testing';
import { UserdemoController } from './userdemo.controller';

describe('UserdemoController', () => {
  let controller: UserdemoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserdemoController],
    }).compile();

    controller = module.get<UserdemoController>(UserdemoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
