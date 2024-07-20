import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  header:string='Fired UP!!'
  homepage: any[] = [];
  url:any='https://meetmtp.com/wp-content/uploads/2021/08/CMU-Slider-Size-e1444928186432.gif'


  
  constructor(private homeService:HomeService){}

  ngOnInit(): void {
    this.homeService.getHomeService().subscribe((data) => {
      this.homepage = data;
    });
  }

  
}
