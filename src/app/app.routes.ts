import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { RegisterPage } from './pages/register-page/register-page';
import { LoginPage } from './pages/login-page/login-page';
import { AllTripsPage } from './pages/all-trips-page/all-trips-page';
import { TripDetailsComponent } from './components/trip-details/trip-details'; 
 export const routes: Routes = [
    { path: 'home', component: HomePage },
    { path: 'register', component: RegisterPage },
    { path: 'login', component: LoginPage },
    { path: 'trips', component: AllTripsPage },
    { path: 'my-trips', component: TripDetailsComponent },
    { path: 'trip/:id', component: TripDetailsComponent },
    { path: '**', redirectTo: 'login' },

];
