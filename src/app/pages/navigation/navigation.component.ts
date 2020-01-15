import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pwe-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private isVisible:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.isVisible = !this.isVisible;
  }
}
