import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {CryptoCurrency} from '../../models/CryptoCurrency';
import { LoadFiatCurrenciesAction } from 'src/app/store/fiat-currency.actions';

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


  constructor(private store$: Store<{currency: {currencies: CryptoCurrency[]}}>) { }

  ngOnInit() {
  }

  selectCurrency(currency) {
    this.selectedCurrency = currency;
    // this.store$.dispatch(LoadCryptocurrenciesAction({payload: { currency}}));
  }

}
