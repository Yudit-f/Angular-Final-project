import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
})
export class RegisterPage {
  errorMessage = '';
  successMessage = '';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  onSubmit(form: NgForm): void {
    this.errorMessage = '';
    this.successMessage = '';

    const username = String(form.value.username ?? '').trim();
    const password = String(form.value.password ?? '');
    const passwordVerify = String(form.value['password-verify'] ?? '');

    if (!username || !password || !passwordVerify) {
      this.errorMessage = 'Please complete all fields.';
      return;
    }

    if (password !== passwordVerify) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.http
      .get<any[]>(`http://localhost:3000/users?name=${encodeURIComponent(username)}`)
      .subscribe({
        next: (users) => {
          if (users.length > 0) {
            this.errorMessage = 'This username already exists.';
            return;
          }

          this.http
            .post('http://localhost:3000/users', {
              name: username,
              password,
            })
            .subscribe({
              next: () => {
                this.successMessage = 'Registration successful.';
                this.router.navigate(['/home']);
              },
              error: () => {
                this.errorMessage = 'Registration failed. Please try again.';
              },
            });
        },
        error: () => {
          this.errorMessage = 'Unable to reach the server right now.';
        },
      });
  }
}
