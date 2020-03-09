import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from './services/auth/auth.service';

@Component({
  selector: 'pwe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'portailWeb';
  private showSideNav = true;
  private isAuth = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUser().subscribe((value) => this.isAuth = (value !== null));
  }

  toggleShowSideNav(event) {
    this.showSideNav = event;
  }
}
