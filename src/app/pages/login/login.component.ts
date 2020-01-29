import {Component, OnInit} from '@angular/core';
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

    constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, public authService: AuthService) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.authService.signInUser(this.loginForm.value.email, this.loginForm.value.password).then(
            () => {
                this.toastr.success('Vous êtes maintenant connecté !');
                this.router.navigate(['/dashboard']);
            },
            (error) => {
                this.toastr.error('Erreur lors de la connexion');
            }
        );
    }
}
