import {Component, Input, OnInit} from '@angular/core';
import {SnackBarService} from './snack-bar.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'pwe-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  animations: [
    trigger(
      'openClose',
      [
        transition(
            ':enter',
            [
              style({ opacity: 0, bottom: '0px', transform: 'translate(-50%, 100%)'}),
              animate('0.5s ease-out',
                  style({ opacity: 1, bottom: '20px', transform: 'translate(-50%, 0%)' }))
            ]
        ),
        transition(
            ':leave',
            [
              style({ opacity: 1, bottom: '20px', transform: 'translate(-50%, 0%)' }),
              animate('0.5s ease-in',
                  style({ opacity: 0, bottom: '0px', transform: 'translate(-50%, 100%)' }))
            ]
        )
      ]
    )
  ]
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
    if(this.message.length > 0) {
      this.isVisible = true;
      setTimeout(() => this.hide(), 3000);
    }
  }
  hide() {
    this.isVisible = false;
  }

}
