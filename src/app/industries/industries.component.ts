import { Component } from '@angular/core';
import { IndustryService } from '../industry.service';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css'
})
export class IndustriesComponent {

  industries: any[] = [];
  constructor(private industryService: IndustryService) {}

  ngOnInit(): void {
    this.industryService.getIndustries().subscribe(data => {
      this.industries = data;
    });

  }
}
