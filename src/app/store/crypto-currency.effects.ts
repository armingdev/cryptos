import {Injectable} from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Action, Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {cryptocurrencyManagementStoreActions, cryptocurrencyManagementStoreState} from './index';
import {Cryptocurrency} from '../shared/models/Cryptocurrency';
import {CryptocurrencyManagementService} from '../features/crypto-currency/services/cryptocurrency-management.service';

@Injectable()
export class CryptocurrencyManagementStoreEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store$: Store<cryptocurrencyManagementStoreState.State>,
    private readonly cryptocurrencyManagementService: CryptocurrencyManagementService
  ) {}

  @Effect() loadCryptocurrenciesEffect$: Observable<Action> = this.actions$.pipe(
    ofType<cryptocurrencyManagementStoreActions.LoadCryptocurrenciesAction>(cryptocurrencyManagementStoreActions.CryptocurrencyManagementActionTypes.LoadCryptocurrencies),
    switchMap((action: any) => {
      return this.cryptocurrencyManagementService.getCryptocurrencies().pipe(
        map(
          (result: Array<Cryptocurrency>) =>
            new cryptocurrencyManagementStoreActions.LoadCryptocurrenciesSuccessAction({
              cryptocurrencies: result
            })
        ),
        catchError(error => of(new cryptocurrencyManagementStoreActions.LoadCryptocurrenciesFailAction({ error })))
      );
    })
  );
}
