import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { CreateOcrDto } from './dto/create-ocr.dto';
import { UpdateOcrDto } from './dto/update-ocr.dto';

import OCRService from './ocr';

@Injectable()
export class OcrService {
  constructor(private readonly configService: ConfigService) {}

  async idCard(createOcrDto: CreateOcrDto) {
    const dt = await OCRService.ekyc(createOcrDto.image);

    return dt;
  }

  async vehicleRegistrations(createOcrDto: CreateOcrDto) {
    const dt = await OCRService.vehicleRegistrations(createOcrDto.image);

    return dt;
  }

  async vehicleInspection(createOcrDto: CreateOcrDto) {
    const dt = await OCRService.vehicleInspection(createOcrDto.image);

    return dt;
  }

  async birthCertificate(createOcrDto: CreateOcrDto) {
    const dt = await OCRService.birthCertificate(createOcrDto.image);
    return dt;
  }

  async vehiclePlate(createOcrDto: CreateOcrDto) {
    const dt = await OCRService.vehiclePlate(createOcrDto.image);

    return dt;
  }

  findAll() {
    console.log(
      "ConfigService.get('JWT_ACCESS_SECRET')",
      this.configService.get('OCR_API_KEY'),
      process.env.OCR_API_KEY
    );

    return `This action returns all ocr`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ocr`;
  }

  update(id: number, updateOcrDto: UpdateOcrDto) {
    return `This action updates a #${id} ocr`;
  }

  remove(id: number) {
    return `This action removes a #${id} ocr`;
  }
}
