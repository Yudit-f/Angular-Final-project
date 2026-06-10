import { Component, OnInit } from '@angular/core';
import { TripsService } from '../../services/trips-servic';
import { Trip } from '../../models/trip.model';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';
import { LoginService } from '../../services/login-service';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-all-trips-page',
  imports: [Header, RouterLink, FormsModule],
  templateUrl: './all-trips-page.html',
  styleUrl: './all-trips-page.scss',
})



export class AllTripsPage implements OnInit {
  trips: Trip[] = [];
  user: any = null;
  bookings: any[] = [];

  
  constructor(private tripsService: TripsService, private router: Router, public LoginService: LoginService, private http: HttpClient) { }
  filteredTrips: Trip[] = [];

  
  searchTerm = '';
  dateFilter = '';
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

deleteTrip(trip: Trip) {
  this.http.delete(`http://localhost:3000/trips/${trip.id}`)
    .subscribe(() => {
      this.trips = this.trips.filter(t => t.id !== trip.id);
    });
}}