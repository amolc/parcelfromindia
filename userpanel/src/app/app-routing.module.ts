import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAddressComponent } from './admin/add-address/add-address.component';
import { DashboradComponent } from './dashboradPanel/dashborad/dashborad.component';
const routes: Routes = [
  {
    path: 'AddAddress', component: AddAddressComponent
  },
  {
    path:'DashBorad', component : DashboradComponent
  },
  {
    path: '', redirectTo: '/AddAddress', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
