import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TapService } from '../tap.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  response:any;
  constructor(public tapSrv : TapService,) { }

  ngOnInit(): void {
    this.getTransactionDetails();
  }

  getTransactionDetails(){
    var url = document.URL;
    //console.log(url);
    var id = url.substring(url.lastIndexOf('=')+1);
    this.tapSrv.getTransactionDetails(id).then(
      res=>{
        this.response = JSON.parse(res);
        console.log(this.response);
      }
    )
  }

}
