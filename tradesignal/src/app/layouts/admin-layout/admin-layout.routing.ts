import { Routes } from '@angular/router';

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
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },

    { path: 'pickup', component: MapsComponent },
    { path: 'mysuite', component: MySuiteComponent },
    { path: 'purchase', component: AssistedPurchaseComponent },
    { path: 'ShippingCalculator', component: ShippingCalculatorComponent },
    { path: 'ProhibitedItems', component: ProhibitedItemsComponent },
    { path: 'createsignal', component: CreatesignalComponent }
];
