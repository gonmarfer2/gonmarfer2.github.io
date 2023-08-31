import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { DesignsPageComponent } from './designs-page/designs-page.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'designs', component: DesignsPageComponent },
  { path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
