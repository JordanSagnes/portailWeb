import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pwe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  constructor() { }

  ngOnInit() {
  }

  onLogin(event) {
    event.preventDefault();
    console.log(this.username, this.password);
  }
}
