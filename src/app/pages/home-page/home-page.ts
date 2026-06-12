import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home-page',
  imports: [Header, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
