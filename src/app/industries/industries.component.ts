import { Component } from '@angular/core';
import { IndustryService } from '../industry.service';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css'
})
export class IndustriesComponent {

  industries: any[] = [];
  icons: any[]=[];
  url: any='https://erp.today/wp-content/uploads/2022/12/Artificial_Intelligence-2048x1024.jpg'
  url2: any='https://blog.credgenics.com/wp-content/uploads/2023/07/future-financial-technology-controll-by-ai-robot-huminoid-uses-machine-learning-min-scaled-2-2048x1152.jpg'
  url3: any='https://www.gebauer.com/hubfs/healthcare-technology.jpg'
  
  constructor(private industryService: IndustryService) {}

  ngOnInit(): void {
    this.industryService.getIndustries().subscribe(data => {
      this.industries = data;
    });

  }
}
