import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

private home=[
  {
    "homepage": {
      "intro": {
        "title": "Welcome to Our GTU",
        "subtitle": "Discover Our Services and Offerings",
        "description": "We provide a wide range of services to meet your needs. Explore our website to learn more about what we have to offer and how we can help you achieve your goals.",
        "callToAction": {
          "text": "Get Started",
          "link": "/get-started"
        }
      }
    }
  }

  
]

  constructor() { }

  getHomeService(): Observable<any[]> {
    return of(this.home);
  }
}
