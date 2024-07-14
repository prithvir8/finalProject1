import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService {
  url='https://jsonplaceholder.typicode.com/users';


  private solutions = [
    {
      id: 1,
      name: 'CRM System',
      description: 'Customer Relationship Management  Customer Relationship Management (CRM) System helps businesses manage and analyze customer interactions and data throughout the customer lifecycle. The goal is to improve business relationships with customers, assist in customer retention, and drive sales growth. It integrates and automates sales, marketing, and customer support'
    },
    {
      id: 2,
      name: 'ERP System',
      description: 'An Enterprise Resource Planning (ERP) System integrates various functions into one complete system to streamline processes and information across the organization. ERP systems include modules for finance, human resources, manufacturing, supply chain, services, procurement, and others. It helps in automating back-office tasks and providing insights into key performance indicators.'
    },
    {
      id: 3,
      name: 'E-commerce Platform',
      description: 'An E-commerce Platform is a comprehensive software solution that allows businesses to manage their online sales operations. It includes features like product listings, shopping cart, payment processing, order management, and customer service tools. It helps businesses establish an online presence, reach more customers, and provide a seamless shopping experience.'
      },
      {
        id: 4,
        name: 'Business Intelligence ',
        description: 'An E-commerce Platform is a comprehensive software solution that allows businesses to manage their online sales operations. It includes features like product listings, shopping cart, payment processing, order management, and customer service tools. It helps businesses establish an online presence, reach more customers, and provide a seamless shopping experience.'
        }
  ];


  constructor() { }

  getSolutions(): Observable<any[]> {
    return of(this.solutions);
  }



}
