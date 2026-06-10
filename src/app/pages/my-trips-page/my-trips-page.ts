import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { LoginService } from '../../services/login-service';
import {  TripsService } from '../../services/trips-service';
import { Trip } from '../../models/trip.model';
import{Booking} from '../../models/booking.model';

@Component({
  selector: 'app-my-trips-page',
  standalone: true,
  imports: [Header],
  templateUrl: './my-trips-page.html',
  styleUrl: './my-trips-page.scss',
})
export class MyTripsPage implements OnInit {
  private tripsService = inject(TripsService);
  private loginService = inject(LoginService);
  private router = inject(Router);

  myTrips: { booking: Booking; trip: Trip }[] = [];

  ngOnInit(): void {
    const currentUserId = Number(
      this.loginService.getCurrentUser()?.id ?? 0);

    console.log('Current User ID:', currentUserId);

    this.tripsService.getBookingsByUser(currentUserId).subscribe(bookings => {
      console.log('Bookings:', bookings);

      this.tripsService.getTrips().subscribe(trips => {
        console.log('Trips:', trips);

        this.myTrips = bookings
          .map(booking => {
            const trip = trips.find(
              trip => String(trip.id) === String(booking.tripId)
            );
            console.log(bookings);
            console.log(trips);
            
        if (!trip) return null;

        return {
          booking,
          trip
        };
      })
        .filter(item => item !== null) as {
          booking: Booking;
          trip: Trip;
        }[];
    });
  }
    );
}
showTripDetails(trip: Trip) {
  this.router.navigate(['/trip', trip.id]);console.log(trip.id);

}
}