import {CryptoCurrency} from '../shared/models/CryptoCurrency';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export const featureAdapter: EntityAdapter<CryptoCurrency> = createEntityAdapter<CryptoCurrency>({
  selectId: model => model.id,
  sortComparer: (a: CryptoCurrency, b: CryptoCurrency): number => (a.id <= b.id ? 1 : 0)
});

export interface State extends EntityState<CryptoCurrency> {
  isLoading: boolean;
  error: any;
  selectedCurrency: CryptoCurrency; // may not be neccessary
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null,
  selectedCurrency: null
});
