import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
 


@Component({
  selector: 'app-login-page',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  constructor(private http: HttpClient) {}
  onSubmit(form: NgForm) {
    const loginData = {
    username: form.value.username,
    password: form.value.password
  };

   this.http.post('http://localhost:3000/api/login', loginData)
    .subscribe({
      next: (res: any) => {
        if (res.success) {
          console.log('Login successful');
        } else {
          console.log('Invalid username or password');
        }
      },
      error: err => {
        console.error('Server error', err);
      }
    });

  





}}
