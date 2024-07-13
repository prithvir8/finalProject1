import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactformComponent } from './contactform/contactform.component';

const routes: Routes = [
  { path: 'contactform', component: ContactformComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
