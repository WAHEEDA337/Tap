import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    HomeComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
