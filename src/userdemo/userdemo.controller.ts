import { Controller, Get } from '@nestjs/common';
@Controller('userdemo')
export class UserdemoController {
  @Get('cat')
  findCat() {
    return '我是没有provider的控制器';
  }
}
