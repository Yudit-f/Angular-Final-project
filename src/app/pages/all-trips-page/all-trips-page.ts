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
  filteredTrips: Trip[] = [];
  bookings: any[] = [];
  user: any = null;

  searchTerm = '';
  dateFilter = '';

  constructor(
    private tripsService: TripsService,
    private router: Router,
    public loginService: LoginService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

    // always load user FIRST
    this.user = this.loginService.getCurrentUser();

    // load trips
    this.tripsService.getTrips().subscribe(trips => {
      this.trips = trips;
      this.filteredTrips = [...trips];
    });

    // load bookings
    this.tripsService.getBookings().subscribe(bookings => {
      this.bookings = bookings;
    });
  }

  // NAVIGATION
  showTripDetails(trip: Trip): void {
    this.router.navigate(['/trip', trip.id]);
  }

  // FILTERING
  applyFilters(): void {
    let result = [...this.trips];

    // destination OR price
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();

      result = result.filter(trip =>
        trip.destination.toLowerCase().includes(term) ||
        trip.price.toString().includes(term)
      );
    }

    // date filter (FIXED)
    if (this.dateFilter) {
      const filterDate = new Date(this.dateFilter);

      result = result.filter(trip =>
        new Date(trip.startDate) >= filterDate
      );
    }

    this.filteredTrips = result;
  }

  // DELETE
  deleteTrip(trip: Trip): void {
    this.http.delete(`http://localhost:3000/trips/${trip.id}`)
      .subscribe(() => {
        this.trips = this.trips.filter(t => t.id !== trip.id);

        // keep UI synced
        this.applyFilters();
      });
  }
}