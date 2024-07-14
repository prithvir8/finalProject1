import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { validateHeaderName } from 'http';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.css'
})
export class ContactformComponent {




  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pwd:['',[Validators.required, Validators.minLength]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
    }
  }


  }

