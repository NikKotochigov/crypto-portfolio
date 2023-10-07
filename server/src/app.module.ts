import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PurchaseModule } from './purchase/purchase.module';
import { configService } from './config/config.service';
import { CryptocurrencyModule } from './cryptocurrency/cryptocurrency.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    PurchaseModule,
    CryptocurrencyModule,
  ],
  controllers: [
    AppController
  ],
  providers: []
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) { }
}