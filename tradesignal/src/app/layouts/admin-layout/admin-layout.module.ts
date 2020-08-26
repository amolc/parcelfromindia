import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
//import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
//import { TablesComponent } from '../../pages/tables/tables.component';
import { MySuiteComponent } from '../../pages/my-suite/my-suite.component';
import { AssistedPurchaseComponent } from '../../pages/assisted-purchase/assisted-purchase.component';
import { ShippingCalculatorComponent } from '../../pages/shipping-calculator/shipping-calculator.component';
import { ProhibitedItemsComponent } from '../../pages/prohibited-items/prohibited-items.component';
import { CreatesignalComponent } from '../../pages/createsignal/createsignal.component';
import { IndiastocksComponent } from '../../pages/indiastocks/indiastocks.component';
import { AnalystpagedetailsComponent } from '../../pages/analystpagedetails/analystpagedetails.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgxPaginationModule,

    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    CreatesignalComponent,

    MapsComponent,
    MySuiteComponent,
    AssistedPurchaseComponent,
    ShippingCalculatorComponent,
    ProhibitedItemsComponent,
    IndiastocksComponent,
    AnalystpagedetailsComponent

  ]
})

export class AdminLayoutModule { }
