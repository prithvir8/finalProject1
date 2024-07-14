import { Component } from '@angular/core';
import { SolutionsService } from '../solutions.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  solutions: any[] = [];

  constructor(private solutionsService: SolutionsService) { }

  ngOnInit(): void {
    this.solutionsService.getSolutions().subscribe(data => {
      this.solutions = data;
      console.log('solutions',this.solutions)
    });

  }
}
