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
import { IndiastocksComponent } from '../../pages/indiastocks/indiastocks.component';
import { AnalystpagedetailsComponent } from '../../pages/analystpagedetails/analystpagedetails.component';
import { SignalsComponent } from '../../pages/signals/signals.component';
import { CreateplanComponent } from '../../pages/createplan/createplan.component';
import { AnalystviewComponent } from '../../pages/analystview/analystview.component';
import { CreatplanComponent } from '../../pages/creatplan/creatplan.component';
import { PlanSignalComponent } from '../../pages/plan-signal/plan-signal.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'india-stocks', component: IndiastocksComponent },
    { path: 'analyst', component: AnalystpagedetailsComponent },
    { path: 'pickup', component: MapsComponent },
    { path: 'signals', component: SignalsComponent },
    { path: 'mysuite', component: MySuiteComponent },
    { path: 'plan', component: CreateplanComponent },
    { path: 'purchase', component: AssistedPurchaseComponent },
    { path: 'ShippingCalculator', component: ShippingCalculatorComponent },
    { path: 'ProhibitedItems', component: ProhibitedItemsComponent },
    { path: 'createsignal', component: CreatesignalComponent },
    { path: 'Analystview/:id', component: AnalystviewComponent },
    { path: 'Creatplan/:id', component: CreatplanComponent },
    { path: 'PlanSignal', component: PlanSignalComponent }
];
