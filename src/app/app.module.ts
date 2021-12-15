import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { InformationInProcessComponent } from './components/concentration/information-in-process/information-in-process.component';
import { ListComponent } from './components/list/list.component';
import { ConcentrationOfContactsComponent } from './components/concentration/concentration-of-contacts/concentration-of-contacts.component';
import { PhonePipe } from './services/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformationInProcessComponent,
    ListComponent,
    ConcentrationOfContactsComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
