import { Component, OnInit } from '@angular/core';
import { TripsService } from '../../services/trips-servic';
import { Trip } from '../../models/trip.model';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';
@Component({
  selector: 'app-all-trips-page',
  imports: [Header],
  templateUrl: './all-trips-page.html',
  styleUrl: './all-trips-page.scss',
})



export class AllTripsPage implements OnInit{
  trips: Trip[] = [];
  constructor(private tripsService: TripsService,  private router: Router) {}

  ngOnInit() {
  this.tripsService.getTrips().subscribe(trips => {
    this.trips = trips;

        

  });
}

showTripDetails(trip: Trip) {
  this.router.navigate(['/trip', trip.id]);console.log(trip.id);

}
}