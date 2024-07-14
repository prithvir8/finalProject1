import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { IndustryService } from '../industry.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  selectedFilter : string ='';
  services: any[] = [];
  industries: any[]=[];


  setFilter(filter: string) {
    this.selectedFilter = filter;

   /*   ngOnInit():void {
     /*  this.services.getServices().subscribe((data: any[]) => {
        this.services = data;
      }); */

    /*  */ /*         this.industries.getIndustry().subscribe((data: any[]) => {
        this.services = data;
      });
 */
  

  


/* }
  function ngOnInit() {
    throw new Error('Function not implemented.');
  } */

  }
}
