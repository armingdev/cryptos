import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurrencyComponent} from './components/currency/currency.component';
import {CurrencyDetailsComponent} from './components/currency-details/currency-details.component';
import {SharedModule} from '../../shared/shared.module';
import {CurrencyRoutingModule} from './currency-routing.module';
import {CurrencyLayoutComponent} from './layout/currency-layout/currency-layout.component';



@NgModule({
  declarations: [ CurrencyLayoutComponent, CurrencyComponent, CurrencyDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CurrencyRoutingModule
  ]
})
export class CurrencyModule { }
