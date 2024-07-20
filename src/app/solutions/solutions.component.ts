import { Component } from '@angular/core';
import { SolutionsService } from '../solutions.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  solutions: any[] = [];
  title: string='Services That We Offer'

  url:any='https://www.priority-software.com/wp-content/uploads/2023/04/crm-vs-erp1-493x463.jpg'

  constructor(private solutionsService: SolutionsService) { }

  ngOnInit(): void {
    this.solutionsService.getSolutions().subscribe(data => {
      this.solutions = data;
      console.log('solutions',this.solutions)
    });

  }
}
