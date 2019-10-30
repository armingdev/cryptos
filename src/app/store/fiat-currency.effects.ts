import {Injectable} from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Action, Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {fiatCurrencyManagementStoreActions, fiatCurrencyManagementStoreState} from './index';
import {CryptoCurrency} from '../shared/models/CryptoCurrency';
import {CryptocurrencyManagementService} from '../features/crypto-currency/services/cryptocurrency-management.service';

@Injectable()
export class CryptocurrencyManagementStoreEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store$: Store<fiatCurrencyManagementStoreState.State>,
    private readonly cryptocurrencyManagementService: CryptocurrencyManagementService
  ) {}

  @Effect() loadCryptocurrenciesEffect$: Observable<Action> = this.actions$.pipe(
    ofType<fiatCurrencyManagementStoreActions.LoadFiatCurrenciesAction>(fiatCurrencyManagementStoreActions.FiatCurrencyManagementActionTypes.LoadFiatCurrencies),
    switchMap((action: any) => {
      return this.cryptocurrencyManagementService.getCryptocurrencies().pipe(
        map(
          (result: Array<CryptoCurrency>) =>
            new fiatCurrencyManagementStoreActions.LoadFiatCurrenciesSuccessAction({
              fiatCurrency: result
            })
        ),
        catchError(error => of(new fiatCurrencyManagementStoreActions.LoadFiatCurrenciesFailAction({ error })))
      );
    })
  );
}
