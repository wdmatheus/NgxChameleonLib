import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { FormValidationComponent } from './components/home/form-validation/form-validation.component';
import { ModalsComponent } from './components/home/modals/modals.component';
import { TransictionsComponent } from './components/home/transictions/transictions.component';


//local reference
import { NgxChameleonModule } from '../../projects/ngx-chameleon/src/public-api';

//npm reference
//import { NgxChameleonModule } from 'ngx-chameleon';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    HomeComponent,
    AccountComponent,
    FormValidationComponent,
    ModalsComponent,
    TransictionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChameleonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
