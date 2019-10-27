import {Currency} from '../../../../../shared/models/Currency';
import * as CurrencyActions from './currency.actions';
import {getCurrencies, selectCurrency} from './currency.actions';
import {createReducer, on} from '@ngrx/store';

// const initialState = {
//   currencies: [
//     new Currency()
//   ],
//   currency: ''
// };
//
// export function currencyReducer(state = initialState, action: ChangeCurrency) {
//   switch (action.type) {
//     case CurrencyActions.CHANGE_CURRENCY:
//       return {
//         ...state,
//         currency:  action.payload
//       };
//     default:
//       return state;
//   }
// }

const initialState = {
  currencies: [],
  currency: ''
};

const currencyReducerTT = createReducer(initialState,
  on(selectCurrency, (state, {payload: {currency}}) => {
    return {...state, currency};
  } ),
  on(getCurrencies, (state, {payload: {currencies}}) => {
    return {...state, currencies};
  } )
  );

export function currencyReducer(state = initialState, action: any) {
  return currencyReducerTT(state, action);
}
