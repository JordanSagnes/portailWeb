import {Component, Input, OnInit} from '@angular/core';
import {SnackBarService} from './snack-bar.service';

@Component({
  selector: 'pwe-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {
  private type: string = 'success';
  private message: string = '';
  private isVisible: boolean = false;
  constructor(private snackBarService: SnackBarService) {}

  ngOnInit() {
    this.snackBarService.getMessage().subscribe(message => {
      this.message = message;
      this.show();
    });
    this.snackBarService.getType().subscribe(type => this.type = type);
  }
  show() {
    this.isVisible = true;
    setTimeout(() => this.hide(), 3000);
  }
  hide() {
    this.isVisible = false;
  }

}
