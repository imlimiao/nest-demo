import { PartialType } from '@nestjs/mapped-types';
import { CreateTestdemoDto } from './create-testdemo.dto';

export class UpdateTestdemoDto extends PartialType(CreateTestdemoDto) {}
