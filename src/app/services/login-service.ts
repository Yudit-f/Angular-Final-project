import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public currentUser: any = null;

  constructor(private http: HttpClient) {}

  login(user: any) {
    this.currentUser = user;
    console.log('User logged in:', this.currentUser);
  }

  logout() {
    this.currentUser = null;
  }

  getUser() {
    return this.currentUser;
  }

  isLoggedIn() {
    return this.currentUser !== null;
  }
  getCurrentUser() {
  return this.currentUser;
}
}

