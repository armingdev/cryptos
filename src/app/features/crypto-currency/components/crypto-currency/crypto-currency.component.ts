import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CryptocurrencyManagementService} from '../../services/cryptocurrency-management.service';
import {Cryptocurrency} from '../../../../shared/models/Cryptocurrency';

@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  styleUrls: ['./crypto-currency.component.scss']
})
export class CryptoCurrencyComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'symbol', 'price', 'day-change'];
  dataSource;
  currencies: Observable<{currency: any}>;

  currencyList: Cryptocurrency[];

  constructor(private store: Store<{currency: {currency: any}}>, private testService: CryptocurrencyManagementService) { }

  ngOnInit() {
    // this.store.dispatch(getCurrencies({ payload: { [] }}));
    this.getCurren()
;    this.store.subscribe(e => {
      console.log(e);
    });
    console.log(this.currencies);
  }

  getCurren() {
    this.testService.getCryptocurrencies().subscribe(data => {
      console.log(data);
      this.dataSource = data.data;
      this.currencyList = data;
    });
  }
}
