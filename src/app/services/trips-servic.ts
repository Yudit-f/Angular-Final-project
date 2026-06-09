import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip.model';
import { Booking } from '../models/booking.model';


@Injectable({
  providedIn: 'root',
})




export class TripsService {

  selectedTrip?: Trip;

  constructor(private http: HttpClient) {}

  

   getTrips() {
    return this.http.get<Trip[]>('http://localhost:3000/trips');
  }

  getTripById(id: string) {
  return this.http.get<Trip>(`http://localhost:3000/trips/${id}`);
}
  setSelectedTrip(trip: Trip) {
  this.selectedTrip = trip;
}

getSelectedTrip() {
  return this.selectedTrip;
}

  getBookings() {
    return this.http.get<Booking[]>('http://localhost:3000/bookings');
  }
  getBookingsByUser(userId: number) {
    return this.http.get<Booking[]>(
      `http://localhost:3000/bookings?userId=${userId}`
    );
  }




}