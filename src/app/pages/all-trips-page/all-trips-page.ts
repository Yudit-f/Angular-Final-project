import { Component, OnInit } from '@angular/core';
import { TripsService,Trip } from '../../services/trips-service';
@Component({
  selector: 'app-all-trips-page',
  imports: [],
  templateUrl: './all-trips-page.html',
  styleUrl: './all-trips-page.scss',
})



export class AllTripsPage {
  trips: Trip[] = [];
  constructor(private tripsService: TripsService) {}

  ngOnInit() {
  this.tripsService.getTrips().subscribe(trips => {
    this.trips = trips;
        console.log(trips);

  });
}






}
