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
  url='https://www.vectorworldmap.com/vectormaps/vector-world-map-v2.2-blank.jpg'
  url2='https://howtorobot.com/sites/default/files/2022-01/robotic-arms.jpg'
  url3 ='https://t4.ftcdn.net/jpg/03/08/69/75/240_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg'
  
  url4='https://t4.ftcdn.net/jpg/03/02/39/97/240_F_302399784_k69fNY2NhbWLYf3Xg4fUz50docoFAwjk.jpg'
  url5='http://interactivemarketinginc.com/wp-content/uploads/2021/07/webdesign5.jpeg'
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
