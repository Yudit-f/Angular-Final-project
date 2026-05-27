import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  constructor(private http: HttpClient, private router: Router) {}

     message = '';

  onSubmit(form: NgForm) {
  const username = form.value.username;
  const password = form.value.password;


   this.http.get<any[]>(
    `http://localhost:3000/users?name=${username}&password=${password}`
  )
  
  .subscribe(res => {
    if (res.length > 0) {
      console.log('Login OK');
        this.message = 'Login successful ';
        this.router.navigate(['/home']);
    } else {
      console.log('Wrong username or password');
      this.message = 'Invalid username or password';
    }
  });
}
  }

  






