import { Component, OnInit } from '@angular/core';
import { TripsService } from '../../services/trips-servic';
import { Trip } from '../../models/trip.model';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';
import { LoginService } from '../../services/login-service';
@Component({
  selector: 'app-all-trips-page',
  imports: [Header],
  templateUrl: './all-trips-page.html',
  styleUrl: './all-trips-page.scss',
})



export class AllTripsPage implements OnInit{
  trips: Trip[] = [];
  user: any = null;
  bookings: any[] = [];

  
  constructor(private tripsService: TripsService,  private router: Router, public LoginService: LoginService) {}

  
  ngOnInit() {
  this.tripsService.getTrips().subscribe(trips => {
    this.trips = trips;

    this.user = this.LoginService.getCurrentUser();

    this.tripsService.getBookings().subscribe(bookings => {
    this.bookings = bookings;
  });
        

  });
}

showTripDetails(trips: Trip) {
  this.router.navigate(['/trip', trips.id]);

}

canEditOrDelete(trip: Trip) {
  return !this.bookings.find(b => b.tripId === trip.id);
}
}