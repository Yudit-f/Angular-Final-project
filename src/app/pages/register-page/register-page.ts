import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service';

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
    private loginService: LoginService,
  ) { }

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

          const newUser = {
            id: nextId,
            name: username,
            password,
          };
          console.log('Creating user:', newUser);
          this.http
            .post('http://localhost:3000/users', newUser)
            .subscribe({
              next: (res) => {
                console.log('User created:', res);
                this.loginService.login(newUser);
                this.router.navigate(['/home']);
              },
              error: (err) => {
                console.error('POST failed:', err);
                this.errorMessage = 'Registration failed.';
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
