import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { MessagePattern } from '@nestjs/microservices';

import { Public } from '../common/decorators/public.decorator';
import { PrismaService } from '../common/services/prisma.service';
import { PostService } from '../modules/post/services/post.service';
import { TransformMessagePayload } from '../common/decorators/payload.decorator';

@Controller({
  version: VERSION_NEUTRAL,
  path: '/',
})
export class AppController {
  constructor(
    private healthCheckService: HealthCheckService,
    private prismaService: PrismaService,
    private readonly postService: PostService,
  ) {}

  @Get('/health')
  @HealthCheck()
  @Public()
  public async getHealth() {
    return this.healthCheckService.check([
      () => this.prismaService.isHealthy(),
    ]);
  }

  @MessagePattern('getAllByIds')
  public async getAllByIds(
    @TransformMessagePayload()
    data: {
      cuttingTypeId?: number;
      sortId?: number;
      catchAreaId?: number;
      processingTypeId?: number;
      sizeId?: number;
      productId?: number;
    },
  ) {
    console.log('Received getAllByIds =>', data);
    return this.postService.getAllByIds(data);
  }
}
