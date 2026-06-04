import { Component } from '@angular/core';
import { CurentUserHeader } from '../../components/curent-user-header/curent-user-header';
import { Header } from '../../components/header/header';
@Component({
  selector: 'app-home-page',
  imports: [Header, CurentUserHeader],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
