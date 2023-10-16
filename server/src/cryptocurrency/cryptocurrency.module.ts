
import { Module } from '@nestjs/common';
import { CryptocurrencyController } from './cryptocurrency.controller';
import { CryptocurrencyService } from './cryptocurrency.servise';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [CryptocurrencyController],
    providers: [CryptocurrencyService],
})
export class CryptocurrencyModule { }