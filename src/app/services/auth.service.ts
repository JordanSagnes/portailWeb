import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {first} from 'rxjs/operators';
import {User} from 'firebase';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user: Observable<User | null>;
    constructor(private authService: AngularFireAuth) {
        this.user = authService.user;
    }

    signInUser(email: string, password: string) {
        return new Promise(
            (resolve, reject) => {
                this.authService.auth.signInWithEmailAndPassword(email, password).then(
                    () => {
                        resolve();
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    signOutUser(): void {
        this.authService.auth.signOut();
    }

    getUser(): Observable<User | null> {
        return this.user;
    }
}
