import { Component, OnInit } from '@angular/core';
import { TapService } from '../tap.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public tapSrv : TapService) { 
    
  }

  ngOnInit(): void {
  }

}
