import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { LogoutComponent } from './pages/logout/logout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AnalystviewComponent } from './pages/analystview/analystview.component';
import { CreatplanComponent } from './pages/creatplan/creatplan.component';
import { PlanSignalComponent } from './pages/plan-signal/plan-signal.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgxPaginationModule,
    // ChartsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LogoutComponent,
    AnalystviewComponent,
    CreatplanComponent,
    PlanSignalComponent,



    //IndiastocksComponent,


    //ResetpasswordComponent,
    //AddAddressComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
