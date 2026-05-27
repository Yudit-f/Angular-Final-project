import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { RegisterPage } from './pages/register-page/register-page';
import { LoginPage } from './pages/login-page/login-page';
import { AllTripsPage } from './pages/all-trips-page/all-trips-page';
import { MyTripsPage } from './pages/my-trips-page/my-trips-page';
export const routes: Routes = [
    { path: 'home', component: HomePage },
    { path: 'register', component: RegisterPage },
    { path: 'login', component: LoginPage },
    { path: 'trips', component: AllTripsPage },
    { path: 'my-trips', component: MyTripsPage },
    { path: '**', redirectTo: 'login' },
];
