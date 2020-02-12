import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {SnackBarService} from '../../shared/snack-bar/snack-bar.service';

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

    constructor(private fb: FormBuilder, private router: Router, private snackBarService: SnackBarService, public authService: AuthService) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.authService.signInUser(this.loginForm.value.email, this.loginForm.value.password).then(
            () => {
                this.snackBarService.show('vous êtes maintenant connecté', 'success');
                this.router.navigate(['/dashboard']);
            },
            (error) => {
                this.snackBarService.show('Erreur lors de la connexion, verifiez vos identifiants', 'error');
            }
        );
    }
}
