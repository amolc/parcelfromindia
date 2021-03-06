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
import { CategoryComponent } from '../../pages/category/category.component';
import { EditprofileComponent } from '../../pages/editprofile/editprofile.component';
import { ItemComponent } from '../../pages/item/item.component';
import { UserComponent } from '../../pages/user/user.component';
import { SubcategoryComponent } from '../../pages/subcategory/subcategory.component';
import { ShipmentuserComponent } from '../../pages/shipmentuser/shipmentuser.component';
import { PickupuserComponent } from '../../pages/pickupuser/pickupuser.component';
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
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    CategoryComponent,
    EditprofileComponent,
    ItemComponent,
    MapsComponent,
    MySuiteComponent,
    AssistedPurchaseComponent,
    ShippingCalculatorComponent,
    ProhibitedItemsComponent,
    UserComponent,
    SubcategoryComponent,
    ShipmentuserComponent,
    PickupuserComponent

  ]
})

export class AdminLayoutModule { }
