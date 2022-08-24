import { Test, TestingModule } from '@nestjs/testing';
import { OcrService } from './ocr.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

describe('OcrService', () => {
  let service: OcrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OcrService],
      imports: [ConfigModule.forRoot({ isGlobal: true })],
    }).compile();

    service = module.get<OcrService>(OcrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
