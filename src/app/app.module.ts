import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule, MatIconModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop'
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorLayoutComponent } from './error-layout/error-layout.component';
//import { SiteLayoutModule } from './site-layout/site-layout.module';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FormGeneratorModule } from './form-generator/form-generator.module'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DragAndDropComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErrorLayoutComponent,
    SiteLayoutComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    DragDropModule,
    FormsModule,
    FormGeneratorModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
