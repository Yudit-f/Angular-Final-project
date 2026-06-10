import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login-service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule, RouterLink],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  message = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private loginService: LoginService
  ) {}

  onSubmit(form: NgForm) {
    const username = String(form.value.username ?? '').trim();
    const password = String(form.value.password ?? '');

    this.http
      this.http.get<any[]>(
  `http://localhost:3000/users?name=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
)
      .subscribe((res) => {
          console.log('Response:', res);
          console.log(username, password);
          console.log('FORM VALUE:', form.value);

  if (res.length > 0) {
    const user = res[0]; 

    console.log('Login OK', user);

    this.loginService.login(user);

    this.message = 'Login successful';
    this.router.navigate(['/home']);
  } else {
    console.log('Wrong username or password');
    this.message = 'Invalid username or password';
  }
      });
  }
}

  






