import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { RegisterPage } from './pages/register-page/register-page';
import { LoginPage } from './pages/login-page/login-page';
import { AllTripsPage } from './pages/all-trips-page/all-trips-page';
import { TripDetailsComponent } from './components/trip-details/trip-details';
import { MyTripsPage } from './pages/my-trips-page/my-trips-page';
import { EditTrip } from './components/edit-trip/edit-trip';
import { CreateTrip } from './components/create-trip/create-trip';
export const routes: Routes = [
    { path: 'home', component: HomePage },
    { path: 'register', component: RegisterPage },
    { path: 'login', component: LoginPage },
    { path: 'trips', component: AllTripsPage },
    { path: 'my-trips', component: MyTripsPage },
    { path: 'trip/:id', component: TripDetailsComponent },
    { path: 'edit-trip/:id', component: EditTrip },
    { path: 'create-trip', component: CreateTrip },
    { path: '**', redirectTo: 'login' },

];
