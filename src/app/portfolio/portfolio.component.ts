import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  selectedFilter : string ='';

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }


}
