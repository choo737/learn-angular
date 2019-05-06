import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { ErrorLayoutComponent } from './error-layout/error-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component'
const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'home', component: HomeComponent },
      { path: 'drag-and-drop', component: DragAndDropComponent },
      { path: 'form-generator', component: FormGeneratorComponent }
    ]
  },
  {
    path: '',
    component: ErrorLayoutComponent,
    children: [
      { path: 'page-not-found', component: PageNotFoundComponent }
    ]
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
