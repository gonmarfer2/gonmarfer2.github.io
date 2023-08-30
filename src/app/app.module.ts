import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ExperienceHistoryComponent } from './experience-history/experience-history.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ProjectWindowComponent } from './project-window/project-window.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    WelcomeComponent,
    AccordionComponent,
    ExperienceHistoryComponent,
    ProjectsPageComponent,
    ProjectWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
