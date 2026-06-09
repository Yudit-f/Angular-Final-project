import { Component, OnInit } from '@angular/core';
import { TripsService } from '../../services/trips-servic';
import { Trip } from '../../models/trip.model';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service';
@Component({
  selector: 'app-all-trips-page',
  imports: [],
  templateUrl: './all-trips-page.html',
  styleUrl: './all-trips-page.scss',
})



export class AllTripsPage implements OnInit{
  trips: Trip[] = [];
  user: any = null;
  
  constructor(private tripsService: TripsService,  private router: Router, public LoginService: LoginService) {}

  
  ngOnInit() {
  this.tripsService.getTrips().subscribe(trips => {
    this.trips = trips;

      this.user = this.LoginService.getCurrentUser();

        

  });
}

showTripDetails(trip: Trip) {
  this.router.navigate(['/trip', trip.id]);console.log(trip.id);

}
}