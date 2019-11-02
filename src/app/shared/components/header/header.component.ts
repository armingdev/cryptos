import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {FiatCurrenciesState} from '../../../store/fiat-currencies/fiat-currency.reducer';
import {LoadCryptoCurrencies} from '../../../store/crypto-currencies/crypto-currency.actions';
import {CryptoCurrenciesState} from '../../../store/crypto-currencies/crypto-currency-reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<CryptoCurrenciesState>) { }

  ngOnInit() {
  }

  refresh() {
    this.store.dispatch(new LoadCryptoCurrencies());
  }

}
