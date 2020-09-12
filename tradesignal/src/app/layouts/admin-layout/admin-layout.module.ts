import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
//import { IconsComponent } from '../../pages/icons/icons.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
//import { TablesComponent } from '../../pages/tables/tables.component';

import { AssistedPurchaseComponent } from '../../pages/assisted-purchase/assisted-purchase.component';

import { CreatesignalComponent } from '../../pages/createsignal/createsignal.component';
import { IndiastocksComponent } from '../../pages/indiastocks/indiastocks.component';
import { AnalystpagedetailsComponent } from '../../pages/analystpagedetails/analystpagedetails.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignalsComponent } from '../../pages/signals/signals.component';
import { CreateplanComponent } from '../../pages/createplan/createplan.component';
import { AnalystviewComponent } from '../../pages/analystview/analystview.component';
import { CreatplanComponent } from '../../pages/creatplan/creatplan.component';
import { PlanSignalComponent } from '../../pages/plan-signal/plan-signal.component';
import { PlanbyidComponent } from '../../pages/planbyid/planbyid.component';
import { AnalystlistComponent } from '../../pages/analystlist/analystlist.component';
import { SignaleditComponent } from '../../pages/signaledit/signaledit.component';
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


    AssistedPurchaseComponent,

    IndiastocksComponent,
    AnalystpagedetailsComponent,
    CreateplanComponent,
    SignalsComponent,
    AnalystviewComponent,
    CreatplanComponent,
    PlanSignalComponent,
    PlanbyidComponent,
    AnalystlistComponent,
    SignaleditComponent

  ]
})

export class AdminLayoutModule { }
