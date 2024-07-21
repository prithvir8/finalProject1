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
    { id: 1,
     name: "Technology",
     icons:'https://erp.today/wp-content/uploads/2022/12/Artificial_Intelligence-2048x1024.jpg',
     description:'From smartphones and computers to artificial intelligence and quantum computing, technology is constantly evolving, driving innovation and transforming how we live, work, and communicate'},
    { id: 2, 
      name: "Finance",
      icons:'https://blog.credgenics.com/wp-content/uploads/2023/07/future-financial-technology-controll-by-ai-robot-huminoid-uses-machine-learning-min-scaled-2-2048x1152.jpg',
      description:'The finance industry plays a crucial role in the economy, providing capital for growth and innovation. Modern financial services rely heavily on technology, with developments like digital banking, cryptocurrency, and blockchain reshaping the landscape.'},
    { id: 3, 
      name: "Healthcare", 
      icons:'https://www.gebauer.com/hubfs/healthcare-technology.jpg',
      description:'Advances in healthcare technology, such as telemedicine, electronic health records, and precision medicine, have significantly improved patient care, diagnostics, and treatment outcomes. Healthcare professionals work tirelessly to prevent, diagnose, and treat illnesses, enhancing overall public health' },
    { id: 4, 
      name: "Education" ,icons:'https://info.stonewallco.com/hs-fs/hubfs/10%20ways%20technology%20is%20shifting%20the%20engineering%20industry.png?width=1800&name=10%20ways%20technology%20is%20shifting%20the%20engineering%20industry.png',
      description:' Technological advancements, such as e-learning, virtual classrooms, and educational software, have transformed traditional education methods, making learning more accessible and personalized.'},
    { id: 5,
       name: "Manufacturing",icons:'https://howtorobot.com/sites/default/files/2022-01/robotic-arms.jpg',
       description:'The manufacturing industry is vital for economic development and has been revolutionized by advancements in automation, robotics, and 3D printing. These technologies enhance production efficiency, reduce costs, and improve product quality.'  
     }
  ];

  constructor() {}

  getIndustries(): Observable<any[]> {
    return of(this.industries);
  }
}

