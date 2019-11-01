import { Component, OnInit } from '@angular/core';
import {CryptocurrencyManagementService} from '../../services/cryptocurrency-management.service';
import {Observable} from 'rxjs';
import {FiatCurrency} from '../../../../shared/models/FiatCurrency';
import {FiatCurrenciesState} from '../../../../store/fiat-currencies/fiat-currency.reducer';
import {select, Store} from '@ngrx/store';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  styleUrls: ['./crypto-currency.component.scss']
})
export class CryptoCurrencyComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'symbol', 'price', 'day-change'];
  dataSource;

  fiatCurrencies$: Observable<FiatCurrency[]>;

  constructor(
    private testService: CryptocurrencyManagementService,
    private store: Store<FiatCurrenciesState>
  ) {
    this.fiatCurrencies$ = store.pipe(
      select('fiatCurrencies'),
      map(data => data.entities),
      map(data => Object.keys(data).map(k => data[k]))
    );
    /*
    this.fiatCurrency$ = store.pipe(
      select('fiatCurrencies'),
      map((fiatCurrenciesState: FiatCurrenciesState) => fiatCurrenciesState.fiatCurrency)
    );
     */
  }

  ngOnInit() {

  }

  // test load cryptos from API
  getCurren() {
    this.testService.getCryptocurrencies().subscribe(data => {
      this.dataSource = data;
    });
  }
}
