import { Component, OnInit } from '@angular/core';
import { TapService } from '../tap.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(public tapSrv : TapService) { }

  ngOnInit(): void {
  }

  charge(){
    this.tapSrv.isLoading = true;
    this.tapSrv.makePayment();
  }

}
