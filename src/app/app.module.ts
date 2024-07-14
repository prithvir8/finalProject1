import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ContactformComponent } from './contactform/contactform.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { IndustriesComponent } from './industries/industries.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactformComponent,
    PortfolioComponent,
    AboutComponent,
    SolutionsComponent,
    IndustriesComponent,
    TechnologiesComponent,
    ServicesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
