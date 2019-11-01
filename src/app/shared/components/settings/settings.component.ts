import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {FiatCurrenciesState, getSelectedFiatCurrencyName} from '../../../store/fiat-currencies/fiat-currency.reducer';
import {Observable} from 'rxjs';
import {FiatCurrency} from '../../models/FiatCurrency';
import {FiatCurrenciesLoaded, SelectFiatCurrency} from '../../../store/fiat-currencies/fiat-currency.actions';
import {selectAllFiatCurrencies} from '../../../store';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  fiatCurrencies$: Observable<FiatCurrency[]>;
  selectedFiatCurrency$: Observable<string>;

  initialFiatCurrencies = [
    {id: 1, name: 'usd'},
    {id: 2, name: 'eur'},
    {id: 3, name: 'cny'}
  ];


  constructor(private store: Store<FiatCurrenciesState>) {
    this.fiatCurrencies$ = store.pipe(select(selectAllFiatCurrencies));
    this.selectedFiatCurrency$ = store.select(getSelectedFiatCurrencyName);
  }

  ngOnInit() {
    this.getFiatCurrencies();
  }

  selectCurrency(currency) {
    this.store.dispatch(new SelectFiatCurrency(currency));
  }

  getFiatCurrencies() {
    this.store.dispatch(new FiatCurrenciesLoaded(this.initialFiatCurrencies));
  }

}
