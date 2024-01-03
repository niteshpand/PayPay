import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private apiUrlConvert =
    'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert';
  private apiUrlCurrency =
    'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest';

  constructor(private http: HttpClient) {}

  getConversion(
    baseCurrency: string = '',
    targetCurrency: string = '',
    result: number=0,
  ): Observable<any> {
    let body = {
      params: {
        from: baseCurrency,
        to: targetCurrency,
        amount: result,
      },

      headers: new HttpHeaders({
        'X-RapidAPI-Key': '1a9722201amsh82e137c0f51592dp1646d7jsnf3e24e506144',
        'X-RapidAPI-Host':
          'currency-conversion-and-exchange-rates.p.rapidapi.com',
      }),
    };
    return this.http.get(this.apiUrlConvert, body);
  }

  getCurrency(): Observable<any> {
    let body = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '1a9722201amsh82e137c0f51592dp1646d7jsnf3e24e506144',
        'X-RapidAPI-Host':
          'currency-conversion-and-exchange-rates.p.rapidapi.com',
      }),
    };
    return this.http.get(this.apiUrlCurrency, body);
  }
}
