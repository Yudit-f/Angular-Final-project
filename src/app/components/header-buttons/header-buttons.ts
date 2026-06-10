import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login-service';

@Component({
  selector: 'app-header-buttons',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-buttons.html',
  styleUrl: './header-buttons.scss',
})
export class HeaderButtons {
  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }test() {
  console.log('CLICK');
}
}
