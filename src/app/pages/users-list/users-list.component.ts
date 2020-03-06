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
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe((newUsers) => this.users = newUsers);
  }
}
