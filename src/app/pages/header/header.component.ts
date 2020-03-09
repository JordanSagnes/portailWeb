import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {SnackBarService} from '../../shared/snack-bar/snack-bar.service';


@Component({
  selector: 'pwe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private showSideNav = true;
  private isAuth = false;
  @Output() showSideNavEvent = new EventEmitter<boolean>();
  constructor(private authService: AuthService, private snackBarService: SnackBarService, private router: Router) { }

  ngOnInit() {
    this.authService.getUser().subscribe((value) => this.isAuth = (value !== null));
  }
  onShowSideNav() {
    this.showSideNav = !this.showSideNav;
    this.showSideNavEvent.emit(this.showSideNav);
  }
  onLogout(event) {
    event.preventDefault();
    this.authService.signOutUser();
    this.snackBarService.show('Vous vous êtes déconnecté !', 'success');
    this.router.navigate(['/login']);
  }
}
