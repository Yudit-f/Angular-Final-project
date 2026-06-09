import { Component } from '@angular/core';
import { LoginService } from '../../services/login-service';


@Component({
  selector: 'app-curent-user-header',
  standalone: true,
  imports: [],

  templateUrl: './curent-user-header.html',
  styleUrls: ['./curent-user-header.scss'],
})

export class CurentUserHeader {

  constructor(public loginService: LoginService) {
  console.log(this.loginService.currentUser);
}
}
