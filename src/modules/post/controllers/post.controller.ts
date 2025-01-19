import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { PostService } from '../services/post.service';

@ApiTags('post')
@Controller({
  version: '1',
  path: '/post',
})
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern('getCuttingById')
  async getCuttingById(@Payload() data: { id: number }) {
    return this.postService.getCuttingById(data.id);
  }

  @MessagePattern('getSortById')
  async getSortById(@Payload() data: { id: number }) {
    return this.postService.getSortById(data.id);
  }

  @MessagePattern('getCatchAreaById')
  async getCatchAreaById(@Payload() data: { id: number }) {
    return this.postService.getCatchAreaById(data.id);
  }

  @MessagePattern('getTypeOfProcessingById')
  async getTypeOfProcessingById(@Payload() data: { id: number }) {
    return this.postService.getTypeOfProcessingById(data.id);
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
