import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pwe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private showSideNav: boolean = true;
  @Output() showSideNavEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() { }
  onShowSideNav() {
    this.showSideNav = !this.showSideNav;
    this.showSideNavEvent.emit(this.showSideNav);
  }
}
