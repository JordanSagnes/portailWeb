import { Component, OnInit } from '@angular/core';
import users from '../../faker/users';
@Component({
  selector: 'pwe-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  private users: any = []; // todo change any
  constructor() { }

  ngOnInit() {
    this.users = users;
  }
}
