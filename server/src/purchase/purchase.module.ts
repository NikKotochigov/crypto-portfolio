import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseEntity } from './purchase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseEntity])], 
  providers: [PurchaseService],
})
export class PurchaseModule {}
