import { Module } from '@nestjs/common';
import { PurchaseModule } from './purchases/purchase.module';

@Module({
  imports: [PurchaseModule],
})

export class AppModule { }