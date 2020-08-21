import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { AddAddressComponent } from '../../pages/add-address/add-address.component';
import { ResetpasswordComponent } from '../../pages/resetpassword/resetpassword.component';
export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'addaddress',       component: AddAddressComponent },
    { path: 'reset',       component: ResetpasswordComponent  },
];
