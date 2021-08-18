import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path:'' , component : HomeComponent},
  {path:'checkout' , component : CheckoutComponent},
  {path:'transaction' , component : TransactionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
