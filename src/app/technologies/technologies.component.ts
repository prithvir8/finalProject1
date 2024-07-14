import { Component } from '@angular/core';
import { TechologyService } from '../techology.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

  technologies: any[] = [];
  constructor(private techService: TechologyService) {}

  ngOnInit(): void {
    this.techService.getTechnologies().subscribe(data => {
      this.technologies = data;
    });


  }
}
