import { HostParam } from '@nestjs/common';
import {
  Controller,
  Get,
  HttpCode,
  Ip,
  Param,
  Query,
  Redirect,
  Req,
  Session,
} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('demo') // 路由根目录
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test/:id') // 路由路径path
  @HttpCode(200) //  修改默认返回状态码
  getHello(@Req() request: Request): string {
    console.log(request.url, '====00000', request.params.id);
    return this.appService.getHello();
  }

  @Get('getId/:id') // 路由路径path
  @HttpCode(200) //  修改默认返回状态码
  getHello2(
    @Req() request: Request,
    @Param('id') id: string,
    @Query('name') name: string,
    @Ip() ip: string,
    @Session() Session: string,
  ): string {
    console.log(
      request.url,
      '====00000',
      request.params.id,
      '=获取ID=',
      request.query,
      id,
      '输出ID',
      request.body,
      name,
      request.headers.cookie,
      request.ip,
      '外部引入==',
      ip,
      Session,
    );
    //request.setEncoding();
    return this.appService.getHello();
  }

  @Get('de**mo') // 路由路径path
  @HttpCode(200) //  修改默认返回状态码
  getHello3(
    @Req() request: Request,
    @Param('id') id: string,
    @Query('name') name: string,
    @Ip() ip: string,
    @Session() Session: string,
    @HostParam('localhost') account: string,
  ): string {
    //debugger;
    console.log(account, 'account');
    //request.setEncoding();
    return '我在测试通配符==';
  }

  @Get('redirect') // 路由路径path
  @HttpCode(200) //  修改默认返回状态码
  @Redirect('https://bj.58.com', 301)
  getHello4(
    @Req() request: Request,
    @Param('id') id: string,
    @Query('name') name: string,
    @Ip() ip: string,
    @Session() Session: string,
  ): object {
    //debugger;
    //request.setEncoding();

    if (name && name === 'test') {
      return { url: 'http://baidu.com' };
    }
  }
}
