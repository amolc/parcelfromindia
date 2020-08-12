import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAddressComponent } from './admin/add-address/add-address.component';
import { DashboradComponent } from './dashboradPanel/dashborad/dashborad.component';
import { LoginComponent } from './admin/login/login.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { ForgotpasswordComponent } from './admin/forgotpassword/forgotpassword.component';
const routes: Routes = [
  {
    path: 'AddAddress', component: AddAddressComponent
  },
  {
    path: 'login', component: LoginComponent 
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: 'forgotpassword', component: ForgotpasswordComponent
  },
  {
    path:'DashBorad', component : DashboradComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
