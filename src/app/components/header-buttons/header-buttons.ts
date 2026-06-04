import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header-buttons',
    standalone: true,
  imports: [RouterLink],
  templateUrl: './header-buttons.html',
  styleUrl: './header-buttons.scss',
})
export class HeaderButtons {

   testClick() {
    console.log('clicked');
  }
}
