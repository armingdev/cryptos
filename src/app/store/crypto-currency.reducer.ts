import {featureAdapter, initialState, State} from './crypto-currency.state';
import {CryptocurrencyManagementActionTypes, Actions} from './crypto-currency.actions';

export function cryptocurrencyManagementReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case CryptocurrencyManagementActionTypes.LoadCryptocurrencies:
      return {
        ...state,
        isLoading: true,
        selectedCurrency: null
      };
    case CryptocurrencyManagementActionTypes.LoadCryptocurrenciesFail:
      return {
        ...state,
        isLoading: false
      };
    case CryptocurrencyManagementActionTypes.LoadCryptocurrenciesSuccess:
      return featureAdapter.addAll(action.payload.cryptocurrencies, {
        ...state,
        isLoading: false
      });
    case CryptocurrencyManagementActionTypes.NoAction:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
