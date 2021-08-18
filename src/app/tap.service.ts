import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TapService {
  price=4;
  name="";
  cardNumber="";
  year="";
  month="";
  cvv="";
  token_id ="";
  isLoading = false;
  
  constructor(public router : Router) {}

  fetchToken(){

    var data ={
      "card": {
        "number": this.cardNumber,
        "exp_month": this.month,
        "exp_year": this.year,
        "cvc": this.cvv,
        "name": this.name,
        "address": {
          "country": "Bahrain",
          "line1": "Salmiya, 21",
          "city": "Bahrain",
          "street": "Salim",
          "avenue": "Gulf"
        }
      },
    };

    var db2 =  fetch("https://api.tap.company/v2/tokens", {
      method: 'POST',
      headers: {
        "authorization" : "Bearer sk_test_XKokBfNWv6FIYuTMg5sLPjhJ",
        "Content-Type": "application/json",
        'mode' : 'no-cors'
      },
      body: JSON.stringify(data),
  }).then(response => {return response.text()})

  return db2
  }

  makePayment(){
    this.fetchToken().then((data)=>{
      console.log(JSON.parse(data));
      let id = JSON.parse(data).id;
      this.charge(id).then((data1)=>{
        let info = JSON.parse(data1);
        console.log(info);
        window.location.href = info.transaction.url;
        this.isLoading = false;
      })
    });
  }

  charge(id:any){

    var data ={
      "amount": this.price,
  "currency": "BHD",
  "threeDSecure": true,
  "save_card": false,
  "description": "Test Description",
  "statement_descriptor": "Sample",
  "metadata": {
    "udf1": "test 1",
    "udf2": "test 2"
  },
  "reference": {
    "transaction": "txn_0001",
    "order": "ord_0001"
  },
  "receipt": {
    "email": true,
    "sms": true
  },
  "customer": {
    "first_name": "Waheeda",
    "middle_name": "",
    "last_name": "Abdulraheem",
    "email": "waheedaa.raheem@gmail.com",
    "phone": {
      "country_code": "973",
      "number": "66712677"
    }
  },
  "merchant": {
    "id": ""
  },
  "source": {
    "id": id,
  },
  "redirect": {
    "url": "http://localhost:4200/transaction"
  }
    };

    var db2 =  fetch("https://api.tap.company/v2/charges", {
      method: 'POST',
      headers: {
        "authorization" : "Bearer sk_test_XKokBfNWv6FIYuTMg5sLPjhJ",
        "Content-Type": "application/json",
        'mode' : 'no-cors'
      },
      body: JSON.stringify(data),
  }).then(response => {return response.text()})

  return db2
  }


  getTransactionDetails(id:any){
    var db2 =  fetch("https://api.tap.company/v2/charges/"+id, {
      method: 'GET',
      headers: {
        "authorization" : "Bearer sk_test_XKokBfNWv6FIYuTMg5sLPjhJ",
        "Content-Type": "application/json",
        'mode' : 'no-cors'
      },
  }).then(response => {return response.text()})

  return db2
  }



}
