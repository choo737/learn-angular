import { NgModule } from '@angular/core';
import { SiteLayoutComponent } from '../site-layout/site-layout.component';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        RouterModule
    ],
    exports: [SiteLayoutComponent],
    declarations: [
        
    ],
    providers: [],
})
export class SiteLayoutModule { }
