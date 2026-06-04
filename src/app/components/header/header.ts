import { Component } from '@angular/core';
import { CurentUserHeader } from '../curent-user-header/curent-user-header';
import { HeaderButtons } from '../header-buttons/header-buttons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CurentUserHeader, HeaderButtons],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
