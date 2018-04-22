import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { EntrepriseComponent } from './esaad/entreprise/entreprise.component';
import { DialogComponent } from './esaad/entreprise/dialog/dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    AppsettingsComponent,
    EntrepriseComponent,
    DialogComponent,  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: "entreprise", component: EntrepriseComponent} ]),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
