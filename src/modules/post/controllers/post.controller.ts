import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PostService } from '../services/post.service';
import { TransformMessagePayload } from 'src/common/decorators/payload.decorator';
import { MessagePattern } from '@nestjs/microservices';

@ApiTags('post')
@Controller({
  version: '1',
  path: '/post',
})
export class PostController {
  constructor(private readonly postService: PostService) {}

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
      additionalServices?: number[];
    },
  ) {
    console.log('Received getAllByIds =>', data);
    return this.postService.getAllByIds(data);
  }

  @Get('cutting-type')
  async searchCutting(@Query('term') term: string) {
    return this.postService.searchCuttingByTerm(term);
  }

  @Get('sort')
  async searchSort(@Query('term') term: string) {
    return this.postService.searchSortByTerm(term);
  }

  @Get('catch-area')
  async searchCatchArea(@Query('term') term: string) {
    return this.postService.searchCatchAreaByTerm(term);
  }

  @Get('type-of-processing')
  async searchTypeOfProcessing(@Query('term') term: string) {
    return this.postService.searchTypeOfProcessingByTerm(term);
  }

  @Get('sizes')
  async searchSizes(@Query('term') term: string) {
    return this.postService.searchSizeByTerm(term);
  }

  @Get('products')
  async searchProducts(@Query('term') term: string) {
    return this.postService.searchProductByTerm(term);
  }
}
