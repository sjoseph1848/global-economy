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
    this._finance.findStock("AMZN")
      .subscribe(result => {
        console.log(result)
        let amzn = result['historical'].map(result => result.close);
        console.log(close);
        let alldate = result['historical'].map(result => result.date);
        console.log(alldate)

        this._finance.findStock("AAPL")
        .subscribe(result => {
          console.log(result)
          let aapl = result['historical'].map(result => result.close);
          console.log(close);
    

          this._finance.findStock("FB")
          .subscribe(result => {
            console.log(result)
            let facebook = result['historical'].map(result => result.close);
            console.log(close);
       

            this._finance.findStock("NFLX")
            .subscribe(result => {
              console.log(result)
              let netflix = result['historical'].map(result => result.close);
              console.log(close);
             

              this._finance.findStock("GOOGL")
              .subscribe(result => {
                console.log(result)
                let google = result['historical'].map(result => result.close);
                console.log(close);
            
       
    

      this.chart.push(new Chart('canvas',{
        type: 'line',

        data: {
          labels: alldate,
          datasets: [
            {
              label:'Amazon',
              data:amzn,
              borderColor: '#F79C34',
              fill:false
            },
            {
              label:'Apple',
              data:aapl,
              borderColor: '#7D7D7D',
              fill:false
            },
            {
              label:'Netflix',
              data:netflix,
              borderColor: '#D81F26',
              fill:false
            },
            {
              label:'Facebook',
              data:facebook,
              borderColor: '#3C5898',
              fill:false
            },
            {
              label:'Google',
              data:google,
              borderColor: '#00A568',
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

      })

    ,)
  
  })

})

    })

  })
      })


  }
}
