import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { isContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {
  url='https://jsonplaceholder.typicode.com/users';
 
  
  private industries = [
    { id: 1, name: "Technology",icons:'https://erp.today/wp-content/uploads/2022/12/Artificial_Intelligence-2048x1024.jpg'},
    { id: 2, name: "Finance",icons:'https://blog.credgenics.com/wp-content/uploads/2023/07/future-financial-technology-controll-by-ai-robot-huminoid-uses-machine-learning-min-scaled-2-2048x1152.jpg' },
    { id: 3, name: "Healthcare", icons:'https://www.gebauer.com/hubfs/healthcare-technology.jpg' },
    { id: 4, name: "Education" ,icons:'https://info.stonewallco.com/hs-fs/hubfs/10%20ways%20technology%20is%20shifting%20the%20engineering%20industry.png?width=1800&name=10%20ways%20technology%20is%20shifting%20the%20engineering%20industry.png'},
    { id: 5, name: "Manufacturing",icons:'https://howtorobot.com/sites/default/files/2022-01/robotic-arms.jpg' }
  ];

  constructor() {}

  getIndustries(): Observable<any[]> {
    return of(this.industries);
  }
}

