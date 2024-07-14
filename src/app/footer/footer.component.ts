import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
phone: any='(972)804-9098'
email: string='xyz@contact.com'
address: string='24500 Coit Rd , ste 900, Plano TX-75803'
  constructor() { }

  
  ngOnInit(): void {
  }

}
