import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post } from './post.entity';
import { Category } from '../categories/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Category])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
