import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public currentUser: any = null;

  constructor() {
    if (typeof window !== 'undefined') {
      const savedUser = window.sessionStorage.getItem('currentUser');
      this.currentUser = savedUser ? JSON.parse(savedUser) : null;
    }
  }

  login(user: any) {
    this.currentUser = user;
    

    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('currentUser', JSON.stringify(user));
    }

    console.log('User logged in:', this.currentUser);
  }

  logout() {
    this.currentUser = null;

    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem('currentUser');
    }
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

