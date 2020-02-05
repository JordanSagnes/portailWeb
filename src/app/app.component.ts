import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portailWeb';
  private showSideNav: boolean = true;
  private isAuth: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUser().subscribe((value) => this.isAuth = (value !== null));
  }

  toggleShowSideNav(event) {
    this.showSideNav = event;
  }
}
