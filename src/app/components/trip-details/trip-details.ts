import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripsService } from '../../services/trips-servic';
import { Trip } from '../../models/trip.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.html',
  styleUrls: ['./trip-details.scss']
})
export class TripDetailsComponent {

  trip!: Trip;

  constructor(
    private route: ActivatedRoute,
    private tripsService: TripsService
  ) {

const id = this.route.snapshot.paramMap.get('id');

this.tripsService.getTripById(id!).subscribe(data => {
  this.trip = data;
});

  }
}