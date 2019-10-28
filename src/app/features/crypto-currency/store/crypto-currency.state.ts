import {Cryptocurrency} from '../../../shared/models/Cryptocurrency';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export const featureAdapter: EntityAdapter<Cryptocurrency> = createEntityAdapter<Cryptocurrency>({
  selectId: model => model.id,
  sortComparer: (a: Cryptocurrency, b: Cryptocurrency): number => (a.id <= b.id ? 1 : 0)
});

export interface State extends EntityState<Cryptocurrency> {
  isLoading: boolean;
  error: any;
  selectedCurrency: Cryptocurrency; // may not be neccessary
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null,
  selectedCurrency: null
});
