import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import { PrismaService } from '../../common/services/prisma.service';

@Module({
  imports: [ConfigModule],
  controllers: [PostController],
  providers: [PrismaService, PostService],
  exports: [PostService],
})
export class PostModule {}
