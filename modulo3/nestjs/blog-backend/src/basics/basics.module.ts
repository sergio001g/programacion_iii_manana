import { Module } from '@nestjs/common';
import { BasicsController } from './basics.controller';
import { BasicsService } from './basics.service';

@Module({
  controllers: [BasicsController],
  providers: [BasicsService]
})
export class BasicsModule {}
