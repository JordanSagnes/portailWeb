import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import User from '../../interfaces/user';

@Component({
    selector: 'pwe-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    @Input() user: User; // todo change any
    private userLogged: User | undefined;
    private formIsVisible: boolean;

    constructor(private authService: AuthService) {
        this.formIsVisible = false;
    }

    ngOnInit() {
        this.authService.getUserDocument().subscribe(user => this.userLogged = user);
    }

    canEdit(): boolean {
        if (this.userLogged !== undefined) {
            return this.userLogged.role === 'admin' || (this.userLogged.role !== 'utilisateur' && this.user.id === this.userLogged.id);
        }
        return false;
    }

    showForm() {
        this.formIsVisible = true;
    }

    hideForm($event) {
        this.formIsVisible = false;
    }

}
