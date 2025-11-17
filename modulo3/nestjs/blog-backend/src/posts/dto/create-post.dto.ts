import { IsString, IsUUID } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsUUID()
  categoryId: string;
}
