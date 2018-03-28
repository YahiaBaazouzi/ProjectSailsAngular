import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgcFloatButtonModule} from 'ngc-float-button'; 


import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { EntrepriseComponent } from './esaad/entreprise/entreprise.component';




@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    AppsettingsComponent,
    EntrepriseComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: "entreprise", component: EntrepriseComponent} ]),
    NgcFloatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
