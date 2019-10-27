import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CurrencyComponent} from './components/currency/currency.component';
import {CurrencyDetailsComponent} from './components/currency-details/currency-details.component';
import {CurrencyLayoutComponent} from './layout/currency-layout/currency-layout.component';


const routes: Routes = [
  { path: '',
    component: CurrencyLayoutComponent,
    children: [
      {
        path: '',
        component: CurrencyComponent,
      },
      {
        path: 'details/:id',
        component: CurrencyDetailsComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
