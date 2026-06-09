import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripsService, Trip, Booking } from '../../services/trips-service';
import { LoginService } from '../../services/login-service';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-trip-details',
  imports: [Header],
  templateUrl: './trip-details.html',
  styleUrls: ['./trip-details.scss']
})
export class TripDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private tripsService = inject(TripsService);
  private loginService = inject(LoginService);
  userBooking: Booking | null = null;
  people: number = 1;
  trip!: Trip;
  registeredPeople = 0;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.tripsService.getTripById(id).subscribe(data => {
      this.trip = data;
      this.loadRegisteredPeople();
      this.loadUserBooking();
    });
  }
  loadRegisteredPeople(): void {
    this.tripsService.getBookings().subscribe(bookings => {
      this.registeredPeople = bookings
        .filter(booking => booking.tripId === String(this.trip.id))
        .reduce((total, booking) => total + booking.people, 0);
    });
  }

  loadUserBooking(): void {
    const user = this.loginService.getCurrentUser();
    if (!user) return;

    this.tripsService.getBookings().subscribe(bookings => {
      this.userBooking = bookings.find(
        b =>
          b.tripId === String(this.trip.id) &&
          b.userId === Number(user.id)
      ) ?? null;
    });
  }

  register(people: number): void {
    const user = this.loginService.getCurrentUser();
    if (!user) return;

    const booking = {
      id: crypto.randomUUID(),
      tripId: String(this.trip.id),
      userId: Number(user.id),
      people: people
    };
    this.tripsService.createBooking(booking).subscribe(() => {
      alert('נרשמת בהצלחה לטיול!');
    });
    this.tripsService.getTripById(this.trip.id).subscribe(data => {
      this.trip = data;
      this.loadUserBooking();
    });
  }
  cancelBooking(): void {
    if (!this.userBooking) return;

    this.tripsService.deleteBooking(this.userBooking.id)
      .subscribe(() => {
        this.userBooking = null;
        this.loadRegisteredPeople();
      });
  }
}