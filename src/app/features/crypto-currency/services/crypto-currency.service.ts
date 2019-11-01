import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CryptoCurrency} from '../../../shared/models/CryptoCurrency';
import {Observable, pipe} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptoCurrencyService {

  baseUrl = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'X-CMC_PRO_API_KEY': '4123ee72-2acc-4555-8708-ff416506af7d',
      'Content-Type':  'application/json',
    })
  };


  constructor(private http: HttpClient) {
  }

  getCryptocurrencies(): Observable<CryptoCurrency[]> {
    return this.http.get<CryptoCurrency[]>(`${this.baseUrl}` + '/listings/latest' , this.httpOptions);

  }
}
