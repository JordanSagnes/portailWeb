import {Component, Input, OnInit} from '@angular/core';
import User from '../../interfaces/user';
import {UsersService} from '../../services/users/users.service';
import {SnackBarService} from '../snack-bar/snack-bar.service';

@Component({
  selector: 'pwe-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user: User; // todo change any
  private model: User;

  constructor(private usersService: UsersService, private snackBarService: SnackBarService) {
  }

  ngOnInit() {
    this.model = {...this.user};
  }

  update() {
    this.usersService.updateUser(this.model).then(
      () => {
        this.snackBarService.show('L\'utilisateur a bien été modifié', 'success');
      },
      (error) => {
        this.snackBarService.show('Une erreur est survenue', 'error');
      }
    );
  }

}
