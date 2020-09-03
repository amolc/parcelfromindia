import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
//import { IconsComponent } from '../../pages/icons/icons.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
//import { TablesComponent } from '../../pages/tables/tables.component';

import { AssistedPurchaseComponent } from '../../pages/assisted-purchase/assisted-purchase.component';


import { CreatesignalComponent } from '../../pages/createsignal/createsignal.component';
import { IndiastocksComponent } from '../../pages/indiastocks/indiastocks.component';
import { AnalystpagedetailsComponent } from '../../pages/analystpagedetails/analystpagedetails.component';
import { SignalsComponent } from '../../pages/signals/signals.component';
import { CreateplanComponent } from '../../pages/createplan/createplan.component';
import { AnalystviewComponent } from '../../pages/analystview/analystview.component';
import { CreatplanComponent } from '../../pages/creatplan/creatplan.component';
import { PlanSignalComponent } from '../../pages/plan-signal/plan-signal.component';
import { PlanbyidComponent } from '../../pages/planbyid/planbyid.component';
import { AnalystlistComponent } from '../../pages/analystlist/analystlist.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'india-stock', component: IndiastocksComponent },
    { path: 'india-stocks/:id', component: PlanbyidComponent },
    { path: 'analyst', component: AnalystpagedetailsComponent },
    { path: 'analystlist', component: AnalystlistComponent },
    { path: 'signals', component: SignalsComponent },

    { path: 'plan', component: CreateplanComponent },
    { path: 'purchase', component: AssistedPurchaseComponent },

    { path: 'createsignal', component: CreatesignalComponent },
    { path: 'Analystview/:id', component: AnalystviewComponent },
    { path: 'Creatplan/:id', component: CreatplanComponent },
    { path: 'PlanSignal', component: PlanSignalComponent }
];
