import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  private home = [
    { id: 1,title:'About Us', description: "Global Tie-Up stands as a beacon of innovation in the realm of technology, specializing in the development of versatile web applications, cutting-edge Android apps, and a myriad of business solutions. Founded on a vision to revolutionize digital experiences, Global Tie-Up has carved a niche for itself as a trusted partner for businesses seeking transformative digital solutions."},
    { id: 2,title:'Mission Statement', description: "Sure, we could tell you about life at CMU, but it's better to see it for yourself with a campus visit. Hear from admissions about applications, scholarships, and programs and take a student-led campus tour. Just pick your visit, grab your comfy shoes and bring your support crew." },
    { id: 3,title:'Vision', description: "We are committed to providing a comprehensive education that prepares students for successful careers and lifelong learning. With over 14,000 students enrolled, we offer more than 200 programs across various academic fields, including business, education, health professions, humanities, social and behavioral sciences, STEM and more.Every student deserves an inclusive and equitable learning environment, and we strive to make that a reality through our commitment to diversity, equity and inclusion. Explore what CMU offers and why we are a top choice for higher education in the Midwest." },
    { id: 4, title:'Getting to Know us', description: "We have always been a community of doers. At the time we opened our doors in 1892 as the Central Michigan Normal School and Business Institute, few of the state's teachers received any formal training in the “norms” of teaching. There was a need, and we filled it. School founders made teacher training their mission in Michigan’s second normal school. " }
  ];

  constructor() { }

  getHomeService(): Observable<any[]> {
    return of(this.home);
  }
}
