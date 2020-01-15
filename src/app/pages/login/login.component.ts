import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pwe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    console.log('test');
  }
}
