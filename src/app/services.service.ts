import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private services = [
    {
      id: 1,
      name: 'Testing',
      description: 'Quality assurance is paramount in todays competitive landscape, and Global-Tie-Up prioritizes testing and QA to ensure the reliability, security, and performance of every solution we deliver. Through rigorous testing methodologies and continuous quality improvement, we strive to exceed industry standards and deliver solutions that inspire trust and confidence'


    },
    {
      id: 2,
      name: 'Infrastructure Management',
      description: 'Beyond development and testing, Global-Tie-Up offers a comprehensive range of IT services, including infrastructure management, digital transformation, managed IT services, and IT outsourcing. Whether its optimizing IT infrastructure for enhanced efficiency and scalability or navigating the complexities of digital transformation, our team provides strategic guidance and operational support every step of the way.'


    },
    {
      id: 3,
      name: 'Cybersecurity',
      description: 'An E-commerce Platform is a comprehensive software solution that allows businesses to manage their online sales operations. It includes features like product listings, shopping cart, payment processing, order management, and customer service tools. It helps businesses establish an online presence, reach more customers, and provide a seamless shopping experience.'
      },
      {
        id: 4,
        name: 'Business Intelligence ',
      description:'  In conclusion, Global-Tie-Up stands as a beacon of excellence in the realm of IT solutions, offering a comprehensive suite of services designed to empower businesses and drive digital transformation. With a focus on innovation, collaboration, and customer satisfaction, we are committed to helping organizations harness the power of technology to achieve their strategic objectives and thrive in the digital era.'

      }
  ];



  constructor() { }

  getServices(): Observable<any[]> {
    return of(this.services);
  }
}
