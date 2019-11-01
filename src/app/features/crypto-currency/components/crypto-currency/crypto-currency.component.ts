import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectAllCryptoCurrencies} from '../../../../store';
import {CryptoCurrency} from '../../../../shared/models/CryptoCurrency';
import {CryptoCurrenciesState} from '../../../../store/crypto-currencies/crypto-currency-reducer';
import {LoadCryptoCurrencies} from '../../../../store/crypto-currencies/crypto-currency.actions';

@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  styleUrls: ['./crypto-currency.component.scss']
})
export class CryptoCurrencyComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'symbol', 'price', 'day-change'];

  cryptoCurrencies$: Observable<CryptoCurrency[]>;

  constructor(
    private store: Store<CryptoCurrenciesState>
  ) {
    this.cryptoCurrencies$ = store.pipe(select(selectAllCryptoCurrencies));
  }

  ngOnInit() {
    this.getCryptoCurrencies();
  }

  // test load cryptos from API
  getCryptoCurrencies() {
    this.store.dispatch(new LoadCryptoCurrencies());
  }
}
