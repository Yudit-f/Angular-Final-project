import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripsService, Trip } from '../../services/trips-service';
// import { Trip } from '../../models/trip.model';
import { LoginService } from '../../services/login-service';
@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.html',
  styleUrls: ['./trip-details.scss']
})
export class TripDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private tripsService = inject(TripsService);
  private loginService = inject(LoginService);
  people: number = 1;
  trip!: Trip;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.tripsService.getTripById(id).subscribe(data => {
      this.trip = data;
    });
  }

  register(): void {
    const user = this.loginService.getCurrentUser();
    if (!user) return;

    const booking = {
      id: crypto.randomUUID(),
      tripId: Number(this.trip.id),
      userId: Number(user.id),
      people: this.people
    };

    this.tripsService.createBooking(booking).subscribe(() => {
      alert('נרשמת בהצלחה לטיול!');
    });
   
  }
}