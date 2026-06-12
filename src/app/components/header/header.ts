import { Component } from '@angular/core';
import { CurentUserHeader } from '../curent-user-header/curent-user-header';
import { HeaderButtons } from '../header-buttons/header-buttons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CurentUserHeader, HeaderButtons, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
