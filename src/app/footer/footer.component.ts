import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
phone: any='(972)804-9098'
email: string='xyz@contact.com'
  constructor() { }

  ngOnInit(): void {
  }

}
