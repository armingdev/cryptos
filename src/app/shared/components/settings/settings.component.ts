import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Currency} from '../../models/Currency';
import * as CurrencyActions from '../../../features/crypto-currency/components/crypto-currency/store/crypto-currency.actions';
import {selectCurrency} from '../../../features/crypto-currency/components/crypto-currency/store/crypto-currency.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  currencies = [
    {value: 'usd', viewValue: 'USD'},
    {value: 'eur', viewValue: 'EUR'},
    {value: 'cny', viewValue: 'CNY'}
  ];

  selectedCurrency: string;


  constructor(private store: Store<{currency: {currencies: Currency[]}}>) { }

  ngOnInit() {
  }

  selectCurrency(currency) {
    this.selectedCurrency = currency;
    this.store.dispatch(selectCurrency({payload: { currency}}));
  }

}
