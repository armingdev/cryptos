import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Cryptocurrency} from '../../models/Cryptocurrency';
import { LoadCryptocurrenciesAction } from 'src/app/store/crypto-currency.actions';

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


  constructor(private store$: Store<{currency: {currencies: Cryptocurrency[]}}>) { }

  ngOnInit() {
  }

  selectCurrency(currency) {
    this.selectedCurrency = currency;
    // this.store$.dispatch(LoadCryptocurrenciesAction({payload: { currency}}));
  }

}
