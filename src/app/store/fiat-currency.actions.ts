import {Action} from '@ngrx/store';
import {CryptoCurrency} from '../shared/models/CryptoCurrency';

export enum FiatCurrencyManagementActionTypes {
  LoadFiatCurrencies = '[FiatCurrencyManagement] Load FiatCurrencies',
  LoadFiatCurrenciesFail = '[FiatCurrencyManagement] Load FiatCurrencies Failure',
  LoadFiatCurrenciesSuccess = '[FiatCurrencyManagement] Load FiatCurrencies Success',
  NoAction = '[FiatCurrencyManagement] No Action',
}

export class LoadFiatCurrenciesAction implements Action {
  readonly type = FiatCurrencyManagementActionTypes.LoadFiatCurrencies;
}

export class LoadFiatCurrenciesFailAction implements Action {
  readonly type = FiatCurrencyManagementActionTypes.LoadFiatCurrenciesFail;
  constructor(public payload: { error: string }) {}
}

export class LoadFiatCurrenciesSuccessAction implements Action {
  readonly type = FiatCurrencyManagementActionTypes.LoadFiatCurrenciesSuccess;
  constructor(public payload: { fiatCurrency: Array<CryptoCurrency> }) {}
}

export class NoAction implements Action {
  readonly type = FiatCurrencyManagementActionTypes.NoAction;
}

export type Actions =
  LoadFiatCurrenciesAction
  | LoadFiatCurrenciesFailAction
  | LoadFiatCurrenciesSuccessAction
  | NoAction;
