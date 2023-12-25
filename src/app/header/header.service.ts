import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
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
  getConversion(): Observable<any> {
    let body = {
      params: {
        from: 'USD',
        to: 'EUR',
        amount: '750',
      },

      headers: new HttpHeaders({
        'X-RapidAPI-Key': '393dc9ab47mshb4f807ba4d34dc6p1b94e7jsn3612648f67e7',
        'X-RapidAPI-Host':
          'currency-conversion-and-exchange-rates.p.rapidapi.com',
      }),
    };
    return this.http.get(this.apiUrlConvert, body);
  }

  getCurrency(): Observable<any> {
    let body = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '393dc9ab47mshb4f807ba4d34dc6p1b94e7jsn3612648f67e7',
        'X-RapidAPI-Host':
          'currency-conversion-and-exchange-rates.p.rapidapi.com',
      }),
    };
    return this.http.get(this.apiUrlCurrency, body);
  }
}
