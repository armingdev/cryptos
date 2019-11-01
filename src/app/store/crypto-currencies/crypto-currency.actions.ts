import {Action} from '@ngrx/store';
import {CryptoCurrency} from '../../shared/models/CryptoCurrency';

// all actions on CryptoCurrencies
export enum CryptoCurrencyActionTypes {
  CryptoCurrencySelected = '[CryptoCurrency] Selected',
  LoadCryptoCurrencies = '[CryptoCurrency] Load data'
}

// actions that wee need
export class SelectCryptoCurrency implements Action {
  readonly type = CryptoCurrencyActionTypes.CryptoCurrencySelected;
  constructor(private  payload: CryptoCurrency) {}
}

export class LoadCryptoCurrencies implements Action {
  readonly type = CryptoCurrencyActionTypes.LoadCryptoCurrencies;
  constructor(private payload: CryptoCurrency[]) {}
}

export type CryptoCurrencyActions = SelectCryptoCurrency
  | LoadCryptoCurrencies;
