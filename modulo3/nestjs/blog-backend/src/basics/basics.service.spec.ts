import { Test, TestingModule } from '@nestjs/testing';
import { BasicsService } from './basics.service';

describe('BasicsService', () => {
  let service: BasicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicsService],
    }).compile();

    service = module.get<BasicsService>(BasicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
