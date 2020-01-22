import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'pwe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  ngOnInit() {}
  onSubmit() {
    this.authService.signInUser(this.loginForm.value.email, this.loginForm.value.password).then(
        () => {
          this.toastr.success('Vous êtes maintenant connecté !');
          this.router.navigate(['/user']); // todo change this
          // this.authService.signOutUser(); // TODO delete this line
        },
        (error) => {
          this.toastr.error('Erreur lors de la connexion');
        }
    );
  }
}
