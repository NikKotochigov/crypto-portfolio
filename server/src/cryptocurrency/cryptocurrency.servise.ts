
import { ForbiddenException, Injectable } from '@nestjs/common';
import { Observable, catchError, map } from 'rxjs';
import { Cryptocurrency } from './cryptocurrency.interface';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CryptocurrencyService {
    constructor(private http: HttpService) { }

    async getCryptocurrencies(offset: number, limit: number): Promise<Observable<Cryptocurrency[]>> {
        const apiUrl = `${process.env.COINMARKETCAP_API_URL}/v1/cryptocurrency/listings/latest`;
        const headers = { 'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY };
        const params = { start: offset, limit };

        return this.http
            .get(apiUrl, { headers, params })
            .pipe(
                map((res) => res.data),
                catchError((error) => {
                    console.error('Server error:', error);
                    throw new ForbiddenException('API not available');
                }),
            );
    }
}
