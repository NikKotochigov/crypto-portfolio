import { Controller, Get } from '@nestjs/common';
import { CryptocurrencyService } from './cryptocurrency.servise';
import { Observable } from 'rxjs';
import { Cryptocurrency } from './cryptocurrency.interface';

@Controller('cryptocurrencies')
export class CryptocurrencyController {
    constructor(private readonly cryptocurrencyService: CryptocurrencyService) { }

    @Get('list')
    getCryptocurrencies(offset: number, limit: number): Promise<Observable<Cryptocurrency[]>> {
        return this.cryptocurrencyService.getCryptocurrencies(offset, limit);
    }
}
