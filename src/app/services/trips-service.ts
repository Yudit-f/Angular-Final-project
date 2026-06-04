import { Injectable,inject } from '@angular/core';
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
@Injectable({
  providedIn: 'root',
})
export class TripsService {

    private http = inject(HttpClient);

   getTrips() {
  return this.http.get<Trip[]>('http://localhost:3000/trips');
}

  
}
