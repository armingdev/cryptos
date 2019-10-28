import {Action, createAction, props} from '@ngrx/store';
import {Currency} from '../../../../../shared/models/Currency';

export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';

export const selectCurrency = createAction('change_currency', props<{payload: {currency: string}}>());
export const getCurrencies = createAction('get_currency', props<{payload: {currencies: any[]}}>());
//export const getCurrencies = createAction();
