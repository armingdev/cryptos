import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CryptoCurrency} from '../../../shared/models/CryptoCurrency';
import { Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {select, Store} from '@ngrx/store';
import {FiatCurrenciesState} from '../../../store/fiat-currencies/fiat-currency.reducer';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CryptoCurrencyService {

  selectedFiatCurrency$: Observable<string>;

  fiatCurrency: string;
  baseUrl = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'X-CMC_PRO_API_KEY': '4123ee72-2acc-4555-8708-ff416506af7d',
      'Content-Type':  'application/json',
    })
  };


  constructor(private http: HttpClient,
              private cryptoStore: Store<FiatCurrenciesState>) {
    this.selectedFiatCurrency$ = cryptoStore.pipe(
      select('fiatCurrencies'),
      map((state: FiatCurrenciesState) => state.selectedFiatCurrencyName)
    );
  }

  getCryptocurrencies(): Observable<CryptoCurrency[]> {
    this.selectedFiatCurrency$.subscribe(data => {
      this.fiatCurrency = data;
    });
    return this.http.get<CryptoCurrency[]>(`${this.baseUrl}` + '/listings/latest?start=1&limit=100&convert=' + this.fiatCurrency, this.httpOptions);

  }
}
