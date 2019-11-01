import {Action} from '@ngrx/store';
import {FiatCurrency} from '../../shared/models/FiatCurrency';

// all actions on FiatCurrencies
export enum FiatCurrencyActionTypes {
  FiatCurrencySelected = '[FiatCurrency] Selected',
  LoadFiatCurrencies = '[FiatCurrency] Load data'
}

// actions that wee need
export class SelectFiatCurrency implements Action {
  readonly type = FiatCurrencyActionTypes.FiatCurrencySelected;
  constructor(private  payload: FiatCurrency) {}
}

export class LoadFiatCurrencies implements Action {
  readonly type = FiatCurrencyActionTypes.LoadFiatCurrencies;
  constructor(private payload: FiatCurrency[]) {}
}

export type FiatCurrencyActions = SelectFiatCurrency
  | LoadFiatCurrencies;
