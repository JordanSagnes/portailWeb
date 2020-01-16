import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portailWeb';
  private showSideNav: boolean = true;

  toggleShowSideNav(event) {
    this.showSideNav = event;
  }
}
