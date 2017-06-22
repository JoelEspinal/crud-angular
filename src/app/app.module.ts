import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewNumberComponent } from './new-number/new-number.component';
import { NumberListComponent } from './number-list/number-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import {appRouterModule} from './app-routing.module';
import { MainComponent } from './main/main.component';
import {ContactService} from "./contact.service";

@NgModule({
  declarations: [
    AppComponent,
    NewNumberComponent,
    NumberListComponent,
    ContactListComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouterModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
