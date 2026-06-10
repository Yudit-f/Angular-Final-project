import { Component, OnInit } from '@angular/core';
import { TripsService } from '../../services/trips-servic';
import { Trip } from '../../models/trip.model';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-all-trips-page',
  imports: [Header, FormsModule],
  templateUrl: './all-trips-page.html',
  styleUrl: './all-trips-page.scss',
})



export class AllTripsPage implements OnInit {
  trips: Trip[] = [];
  constructor(private tripsService: TripsService, private router: Router) { }
  filteredTrips: Trip[] = [];

  searchTerm = '';
  dateFilter = '';
  ngOnInit() {
    this.tripsService.getTrips().subscribe(trips => {
      this.trips = trips;
      this.filteredTrips = [...trips];
    });
  }
  applyFilters(): void {
    let result = [...this.trips];

    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();

      result = result.filter(trip =>
        trip.destination.toLowerCase().includes(term) ||
        trip.price.toString().includes(term)
      );
    }

    if (this.dateFilter) {
      result = result.filter(
        trip => trip.startDate >= this.dateFilter
      );
    }

    this.filteredTrips = result;
  }
  showTripDetails(trip: Trip) {
    this.router.navigate(['/trip', trip.id]); console.log(trip.id);

  }
}