import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {featureAdapter, State} from './fiat-currency.state';
import {CryptoCurrency} from '../shared/models/CryptoCurrency';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const getSelectedFiatCurrency = (state: State): CryptoCurrency => state.selectedCurrency;

const getFiatCurrencyManagementState: MemoizedSelector<object, State> = createFeatureSelector<State>('fiatCurrencyManagement');


export const getFiatCurrencyError: MemoizedSelector<object, any> = createSelector(
  getFiatCurrencyManagementState,
  getError
);

export const getFiatCurrencyIsLoading: MemoizedSelector<object, boolean> = createSelector(
  getFiatCurrencyManagementState,
  getIsLoading
);

export const getFiatCurrencySelectedFiatCurrency: MemoizedSelector<object, CryptoCurrency> = createSelector(
  getFiatCurrencyManagementState,
  getSelectedFiatCurrency
);

export const getFiatCurrencies: (state: object) => Array<CryptoCurrency> =
  featureAdapter.getSelectors(getFiatCurrencyManagementState).selectAll;
