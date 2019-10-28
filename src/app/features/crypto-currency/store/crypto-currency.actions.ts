import {Action} from '@ngrx/store';
import {Cryptocurrency} from '../../../shared/models/Cryptocurrency';

export enum CryptocurrencyManagementActionTypes {
  LoadCryptocurrencies = '[CryptocurrencyManagement] Load Cryptocurrencies',
  LoadCryptocurrenciesFail = '[CryptocurrencyManagement] Load Cryptocurrencies Failure',
  LoadCryptocurrenciesSuccess = '[CryptocurrencyManagement] Load Cryptocurrencies Success',
  NoAction = '[CryptocurrencyManagement] No Action',
}

export class LoadCryptocurrenciesAction implements Action {
  readonly type = CryptocurrencyManagementActionTypes.LoadCryptocurrencies;
}

export class LoadCryptocurrenciesFailAction implements Action {
  readonly type = CryptocurrencyManagementActionTypes.LoadCryptocurrenciesFail;
  constructor(public payload: { error: string }) {}
}

export class LoadCryptocurrenciesSuccessAction implements Action {
  readonly type = CryptocurrencyManagementActionTypes.LoadCryptocurrenciesSuccess;
  constructor(public payload: { cryptocurrencies: Array<Cryptocurrency> }) {}
}

export class NoAction implements Action {
  readonly type = CryptocurrencyManagementActionTypes.NoAction;
}

export type Actions =
  LoadCryptocurrenciesAction
  | LoadCryptocurrenciesFailAction
  | LoadCryptocurrenciesSuccessAction
  | NoAction;
