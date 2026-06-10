import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-trip.html'
})
export class EditTrip implements OnInit {

  trip: any = {};

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    this.http
      .get(`http://localhost:3000/trips/${id}`)
      .subscribe(trip => {
        this.trip = trip;
      });
  }

  save(form: NgForm) {

    this.http
      .put(
        `http://localhost:3000/trips/${this.trip.id}`,
        this.trip
      )
      .subscribe(() => {
        alert('הטיול עודכן');
      });
  }
}