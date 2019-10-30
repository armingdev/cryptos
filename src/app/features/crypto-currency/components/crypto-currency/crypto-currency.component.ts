import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CryptocurrencyManagementService} from '../../services/cryptocurrency-management.service';
import {CryptoCurrency} from '../../../../shared/models/CryptoCurrency';

@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  styleUrls: ['./crypto-currency.component.scss']
})
export class CryptoCurrencyComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'symbol', 'price', 'day-change'];
  dataSource;
  currencies: Observable<{currency: any}>;

  constructor(private store: Store<{currency: {currency: any}}>, private testService: CryptocurrencyManagementService) { }

  ngOnInit() {
    // this.store.dispatch(getCurrencies({ payload: { [] }}));
    this.getCurren();
    this.store.subscribe(e => {
      console.log(e);
    });
  }

  // test load cryptos from API
  getCurren() {
    this.testService.getCryptocurrencies().subscribe(data => {
      this.dataSource = data.data;
    });
  }
}
