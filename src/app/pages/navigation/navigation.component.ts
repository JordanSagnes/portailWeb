import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pwe-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() private isVisible: boolean;

  constructor() {}

  ngOnInit() {
  }

  toggle(): void {
    this.isVisible = !this.isVisible;
  }
}
