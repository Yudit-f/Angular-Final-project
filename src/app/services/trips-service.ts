import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export interface Trip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  price: number;
  description: string;
  image: string;
}
export interface Booking {
  id: string;
  tripId: string;
  userId: number;
  people: number;
}
@Injectable({
  providedIn: 'root',
})
export class TripsService {

  private http = inject(HttpClient);

  getTrips() {
    return this.http.get<Trip[]>('http://localhost:3000/trips');
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
