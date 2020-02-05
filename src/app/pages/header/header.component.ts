import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';


@Component({
  selector: 'pwe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private showSideNav: boolean = true;
  private isAuth: boolean = false;
  @Output() showSideNavEvent = new EventEmitter<boolean>();
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

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
    this.toastr.success('Vous vous êtes déconnecté !');
    this.router.navigate(['/login']);
  }
}
