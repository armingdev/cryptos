import {featureAdapter, initialState, State} from './fiat-currency.state';
import {FiatCurrencyManagementActionTypes, Actions} from './fiat-currency.actions';

export function fiatCurrencyManagementReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case FiatCurrencyManagementActionTypes.LoadFiatCurrencies:
      return {
        ...state,
        isLoading: true,
        selectedCurrency: null
      };
    case FiatCurrencyManagementActionTypes.LoadFiatCurrenciesFail:
      return {
        ...state,
        isLoading: false
      };
    case FiatCurrencyManagementActionTypes.LoadFiatCurrenciesSuccess:
      return featureAdapter.addAll(action.payload.fiatCurrency, {
        ...state,
        isLoading: false
      });
    case FiatCurrencyManagementActionTypes.NoAction:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
