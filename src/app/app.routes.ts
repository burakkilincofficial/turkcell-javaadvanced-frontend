import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Secure } from './secure/secure';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'secure', component: Secure, canActivate: [authGuard] },
];
