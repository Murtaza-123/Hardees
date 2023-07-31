import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { MicroservicesService } from './microservices.service';
import { CreateMicroserviceDto } from './dto/create-microservice.dto';
import { UpdateMicroserviceDto } from './dto/update-microservice.dto';
import { Request } from 'express';
import { ResponseDto } from './dto/ResponseDto';

@Controller('api/chat/v1')
export class MicroservicesController {
  private map: Map<number, number>;
  constructor() {
    this.map = new Map<number, number>();
  }
  @Post()
  create(
    @Req() req: Request,
    @Body() createMicroserviceDto: CreateMicroserviceDto,
  ): string {
    const call_ids = req.body.call_id;
    if (!this.map.has(call_ids)) {
      this.map.set(call_ids, 1);
     return "Hi! Welcome to Hardee's. How are you doing?";
    }
    const conversation = {
      'What is your Menu': [
        'Famous Star with Cheese',
        'Western Bacon Thickburger',
        'Hand-Breaded Chicken Tenders',
        'Mushroom & Swiss Thickburger',
        'Frisco Breakfast Sandwich',
        'Original Angus Burger',
        'Charbroiled Chicken Sandwich',
        'Bacon, Egg & Cheese Biscuit',
        'Loaded Omelet Biscuit',
        'Crispy Curls (Fries) ',
      ]
        .join(' , ')
        .toString(),
      'Show me the list of beaf burgers': [
        'Famous Star with Cheese',
        'Western Bacon Thickburger',
        'Original Angus Burger',
        'Mushroom & Swiss Thickburger',
        '1/3 lb. Original Thickburger',
        '1/3 lb. Frisco Thickburger',
        '1/3 lb. Bacon Cheese Thickburger',
        '2/3 lb. Monster Thickburger',
        'Double Cheeseburger',
        'Single All-Natural Burger',
      ]
        .join(' , ')
        .toString(),
    };
    const message = req.body.message;
    const response = conversation[message];
    return response;
  }
}
