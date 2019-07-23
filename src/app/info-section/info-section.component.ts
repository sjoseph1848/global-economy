import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openLinkDebt(){
    let url = 'https://www.bloomberg.com/news/articles/2019-07-15/global-debt-accelerated-in-1st-quarter-outpacing-world-economy';
    window.open(url, '_blank');
  }

  openLinkEquity(){
    let url = 'https://www.nytimes.com/2019/07/09/business/economy/recession-world-economy-federal-reserve.html';
    window.open(url, '_blank');
  }

}
