import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {featureAdapter, State} from './crypto-currency.state';
import {Cryptocurrency} from '../shared/models/Cryptocurrency';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const getSelectedCryptocurrency = (state: State): Cryptocurrency => state.selectedCurrency;

const getCryptocurrencyManagementState: MemoizedSelector<object, State> = createFeatureSelector<State>('cryptocurrencyManagement');


export const getCryptocurrencyError: MemoizedSelector<object, any> = createSelector(
  getCryptocurrencyManagementState,
  getError
);

export const getCryptocurrencyIsLoading: MemoizedSelector<object, boolean> = createSelector(
  getCryptocurrencyManagementState,
  getIsLoading
);

export const getCryptocurrencySelectedCryptocurrency: MemoizedSelector<object, Cryptocurrency> = createSelector(
  getCryptocurrencyManagementState,
  getSelectedCryptocurrency
);

export const getCryptocurrencies: (state: object) => Array<Cryptocurrency> =
  featureAdapter.getSelectors(getCryptocurrencyManagementState).selectAll;
