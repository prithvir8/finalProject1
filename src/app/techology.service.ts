import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechologyService {
  private technologies = [
    { id: 1, name: "Angular" },
    { id: 2, name: "React" },
    { id: 3, name: "Vue" },
    { id: 4, name: "Node.js" },
    { id: 5, name: "Python" }
  ];



  constructor() { }
  getTechnologies(): Observable<any[]> {
    return of(this.technologies);
  }

  
}
