import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {StoreModule} from '@ngrx/store';
import {currencyReducer} from './features/currency/components/currency/store/currency.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot({currency: currencyReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
