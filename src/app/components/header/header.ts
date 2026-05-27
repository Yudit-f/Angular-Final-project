import { Component } from '@angular/core';
import { CurentUserHeader } from '../curent-user-header/curent-user-header';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CurentUserHeader],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
