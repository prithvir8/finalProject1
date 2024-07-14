import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactformComponent } from './contactform/contactform.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { IndustriesComponent } from './industries/industries.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contactform', component: ContactformComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled', // Enables anchor scrolling
    })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
