import { Component } from '@angular/core';
import { LoginService } from '../../services/login-service';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-curent-user-header',
  standalone: true,
  imports: [JsonPipe],

  templateUrl: './curent-user-header.html',
  styleUrls: ['./curent-user-header.scss'],
})

export class CurentUserHeader {

  constructor(public loginService: LoginService) {
  console.log(this.loginService.currentUser);
}
}
