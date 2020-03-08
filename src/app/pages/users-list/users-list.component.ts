import { Component, OnInit } from '@angular/core';
import User from '../../interfaces/user';
import {UsersService} from '../../services/users/users.service';
@Component({
  selector: 'pwe-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  private users: User[];
  private searchTerm: string;
  constructor(private usersService: UsersService) {
    this.searchTerm = '';
  }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((newUsers) => this.users = newUsers);
  }
  search() {
    if (this.searchTerm.length > 1 && this.users.length > 1) {
      return this.users.filter(user => {
        const filter = user.firstname.concat(' ' + user.lastname).concat(' ' + user.email).concat(' ' + user.phone);
        return filter.includes(this.searchTerm);
      });
    }
    return this.users;
  }
}
