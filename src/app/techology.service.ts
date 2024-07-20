import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechologyService {
  private technologies = [
    { id: 1, name: "Angular", icon: 'https://miro.medium.com/v2/resize:fit:783/1*Kj8Eq401fP2ecTY8r9B89Q.png'},
    { id: 3, name: "Vue",icon:'https://cdn.prod.website-files.com/61b9e37d1106b57eaa076efd/629df2647290ef3b75d74f2c_a2bc81309136b0c1864f582b1af95307_546c60cadefd5c0f5e78014543c554cb.png' },
    { id: 4, name: "Node.js",icon:'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*bc9pmTiyKR0WNPka2w3e0Q.png' },
    { id: 5, name: "Python",icon:'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ycIMlwgwicqlO6PcFRA-Iw.png' }
  ];



  constructor() { }
  getTechnologies(): Observable<any[]> {
    return of(this.technologies);
  }

  
}
