import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {
  url='https://jsonplaceholder.typicode.com/users';

  
  private industries = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Healthcare" },
    { id: 3, name: "Finance" },
    { id: 4, name: "Education" },
    { id: 5, name: "Manufacturing" }
  ];

  constructor() {}

  getIndustries(): Observable<any[]> {
    return of(this.industries);
  }
}

