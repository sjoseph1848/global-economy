import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../finance.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-debt-section',
  templateUrl: './debt-section.component.html',
  styleUrls: ['./debt-section.component.scss']
})
export class DebtSectionComponent implements OnInit {

  chart = [];

  constructor() { }

  ngOnInit() {

    this.chart.push(new Chart('canvas',{
      type: 'line',

      data: {
        labels: ['1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008'],
        datasets: [
          {
            label:'United States',
            data:[61.99,66.37,68.61,70.19,69.39,68.80,68.03,65.62,62.47,58.88,53.03,53.02,55.38,58.52,65.49,64.89,63.64,64.01,72.85],
            borderColor: '#3D41B9',
            fill:false
          },
        ]
      },


      options: {
        legend:{
          display:false
        },
        scales:{
          xAxes:[{
            display:false
          }],
          yAxes:[{
            display:true
          }]
        }
      }

    }),

    )}

}
