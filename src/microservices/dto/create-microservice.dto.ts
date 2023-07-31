import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateMicroserviceDto {
  @ApiProperty()
  @IsNumber()
  call_id: number;

  @ApiProperty()
  @IsString()
  message: string;
  
  @ApiProperty()
  @IsString()
  phoneNo: string;
}
