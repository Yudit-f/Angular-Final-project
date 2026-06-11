import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';
@Component({
  selector: 'app-create-trip',
  standalone: true,
  imports: [FormsModule,Header],
  templateUrl: './create-trip.html'
})
export class CreateTrip {

  trip = {
    id: '',
    name: '',
    destination: '',
    startDate: '',
    endDate: '',
    price: 0,
    description: '',
    image: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  save(form: NgForm) {

    if (form.invalid) return;

    const newTrip = {
      ...this.trip,
      id: crypto.randomUUID()
    };

    this.http
      .post('http://localhost:3000/trips', newTrip)
      .subscribe(() => {
        alert('Trip created successfully');
        this.router.navigate(['/trips']);
      });
  }
}