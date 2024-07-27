import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import $ from 'jquery';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  header:string='Fired UP!!'
  homepage: any[] = [];
  

  url:any='https://meetmtp.com/wp-content/uploads/2021/08/CMU-Slider-Size-e1444928186432.gif'
  url2:any='https://www.cmich.edu/images/default-source/general/campus-scenic/1800x540-hero-size/2019-460-d-003-campus-shots_1800x5408c452358-a66d-453f-877e-57682835c9fa.jpg?sfvrsn=9d31c022_9'
/*   images=[
  {url:'https://meetmtp.com/wp-content/uploads/2021/08/CMU-Slider-Size-e1444928186432.gif', alt:'firstslide'},
 {url2:'https://www.cmich.edu/images/default-source/general/campus-scenic/1800x540-hero-size/2019-460-d-003-campus-shots_1800x5408c452358-a66d-453f-877e-57682835c9fa.jpg?sfvrsn=9d31c022_9', alt:'second slide'}

  ] */
  constructor(private homeService:HomeService){}


  ngOnInit(): void {
    this.homeService.getHomeService().subscribe((data) => {
      this.homepage = data;
    });
    

  }

  

  
}
