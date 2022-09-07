import { Injectable } from '@nestjs/common';
import { CreateTestdemoDto } from './dto/create-testdemo.dto';
import { UpdateTestdemoDto } from './dto/update-testdemo.dto';

@Injectable()
export class TestdemoService {
  create(createTestdemoDto: CreateTestdemoDto) {
    return 'This action adds a new testdemo';
  }

  findAll() {
    return `This action returns all testdemo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testdemo`;
  }

  update(id: number, updateTestdemoDto: UpdateTestdemoDto) {
    return `This action updates a #${id} testdemo-- 我在测试patch /post 等请求`;
  }

  remove(id: number) {
    return `This action removes a #${id} testdemo`;
  }
}
