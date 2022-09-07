import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { TestdemoService } from './testdemo.service';
import { CreateTestdemoDto } from './dto/create-testdemo.dto';
import { UpdateTestdemoDto } from './dto/update-testdemo.dto';
import { CatsService } from '../cats/cats.service';

@Controller('testdemo')
export class TestdemoController {
  constructor(
    private readonly testdemoService: TestdemoService,
    private readonly catsService: CatsService,
  ) {}

  @Post()
  create(@Body() createTestdemoDto: CreateTestdemoDto) {
    return this.testdemoService.create(createTestdemoDto);
  }

  @Get()
  findAll() {
    return this.testdemoService.findAll();
  }
  @Get('cat')
  findCat() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('我是test demo-get 方法');
    return this.testdemoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestdemoDto: UpdateTestdemoDto,
  ) {
    console.log('我是Patch方法');
    console.log(UpdateTestdemoDto, 'UpdateTestdemoDto');
    return this.testdemoService.update(+id, updateTestdemoDto);
  }

  @Post(':id')
  update2(
    @Param('id') id: string,
    @Body() updateTestdemoDto: UpdateTestdemoDto,
  ) {
    console.log(UpdateTestdemoDto, 'UpdateTestdemoDto', '我是post方法');
    return this.testdemoService.update(+id, updateTestdemoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testdemoService.remove(+id);
  }
}
