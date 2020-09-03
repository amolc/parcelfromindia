import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
//import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

import { ResetpasswordComponent } from '../../pages/resetpassword/resetpassword.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    // NgbModule
    ReactiveFormsModule,
    HttpClientModule

  ],
  declarations: [
    LoginComponent,
    RegisterComponent,

    ResetpasswordComponent
  ]
})
export class AuthLayoutModule { }
