import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-stock',
  templateUrl: './today-stock.component.html',
  styleUrls: ['./today-stock.component.scss']
})
export class TodayStockComponent implements OnInit {
  stock:any
  
  constructor() { }

  ngOnInit() {
  }

}
