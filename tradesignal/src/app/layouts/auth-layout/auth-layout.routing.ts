import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

import { ResetpasswordComponent } from '../../pages/resetpassword/resetpassword.component';
export const AuthLayoutRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'reset', component: ResetpasswordComponent },
];
