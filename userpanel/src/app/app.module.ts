import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAddressComponent } from './admin/add-address/add-address.component';
import { DashboradComponent } from './dashboradPanel/dashborad/dashborad.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    DashboradComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
