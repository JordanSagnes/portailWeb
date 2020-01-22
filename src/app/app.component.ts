import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portailWeb';
  private showSideNav: boolean = true;
  private isAuth: boolean = false;

  constructor() {
    const config = {
      apiKey: 'AIzaSyDRfzAvznKnMD5NoDFQaBZRykgaDfcDMhE',
      authDomain: 'entrepotdonnees-27f74.firebaseapp.com',
      databaseURL: 'https://entrepotdonnees-27f74.firebaseio.com',
      projectId: 'entrepotdonnees-27f74',
      storageBucket: 'entrepotdonnees-27f74.appspot.com',
      messagingSenderId: '461045845641',
      appId: '1:461045845641:web:37f323a6d34e75b3e60058',
      measurementId: 'G-WTL5CWMH2M'
    };
    firebase.initializeApp(config);
    firebase.analytics();
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
        (user) => {
          if(user) {
            this.isAuth = true;
          } else {
            this.isAuth = false;
          }
        }
    );
  }

  toggleShowSideNav(event) {
    this.showSideNav = event;
  }
}
