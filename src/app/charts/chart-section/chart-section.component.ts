import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../finance.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chart-section',
  templateUrl: './chart-section.component.html',
  styleUrls: ['./chart-section.component.scss']
})
export class ChartSectionComponent implements OnInit {

  chart = [];

  constructor(private _finance:FinanceService) { }

  ngOnInit(){
    this._finance.amazonStock()
      .subscribe(result => {
        console.log(result)
        let close = result['historical'].map(result => result.close);
        console.log(close);
        let open = result['historical'].map(result => result.open);
        console.log(open)
        let alldate = result['historical'].map(result => result.date);
        console.log(alldate)
       
     
     

      this.chart.push(new Chart('canvas',{
        type: 'line',
        data: {
          labels: alldate,
          datasets: [
            {
              data:close,
              borderColor: '#3cba9f',
              fill:false
            },
            {
              data:open,
              borderColor: '#ffcc00',
              fill:false
            }
          ]
        },
        options: {
          legend:{
            display:false
          },
          scales:{
            xAxes:[{
              display:true
            }],
            yAxes:[{
              display:true
            }]
          }
        }
      })
    ,)})
  }
}