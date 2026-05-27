import { ChangeDetectorRef, Component } from '@angular/core';
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
    private cdr: ChangeDetectorRef,
  ) {}

  onSubmit(form: NgForm): void {
    this.errorMessage = '';
    this.successMessage = '';

    const username = String(form.value.username ?? '').trim();
    const password = String(form.value.password ?? '');
    const passwordVerify = String(form.value['password-verify'] ?? '');

    if (!username || !password || !passwordVerify) {
      this.errorMessage = 'Please complete all fields.';
      this.cdr.detectChanges();
      return;
    }

    if (password !== passwordVerify) {
      this.errorMessage = 'Passwords do not match.';
      this.cdr.detectChanges();
      return;
    }

    this.http
      .get<any[]>('http://localhost:3000/users')
      .subscribe({
        next: (users) => {
          const existingUser = users.find(
            (user) => user.name?.toLowerCase() === username.toLowerCase(),
          );

          if (existingUser) {
            this.errorMessage = 'This username already exists.';
            this.cdr.detectChanges();
            return;
          }

          const nextId =
            users.reduce((maxId, user) => Math.max(maxId, Number(user.id) || 0), 0) + 1;

          this.http
            .post('http://localhost:3000/users', {
              id: nextId,
              name: username,
              password,
            })
            .subscribe({
              next: () => {
                this.successMessage = 'Registration successful.';
                this.cdr.detectChanges();
                this.router.navigate(['/home']);
              },
              error: () => {
                this.errorMessage = 'Registration failed. Please try again.';
                this.cdr.detectChanges();
              },
            });
        },
        error: () => {
          this.errorMessage = 'Unable to reach the server right now.';
          this.cdr.detectChanges();
        },
      });
  }
}
