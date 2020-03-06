import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {first, map} from 'rxjs/operators';
import {User as UserFire} from 'firebase';
import User from '../../interfaces/user';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user: Observable<UserFire | null>;
    private id: string | null;

    constructor(private authService: AngularFireAuth, private afs: AngularFirestore) {
        this.user = authService.user;
        this.user.subscribe((newUser) => this.id = (newUser) ? newUser.uid : null);
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

    getUser(): Observable<UserFire | null> {
        return this.user;
    }

    getUserDocument(): Observable<User | undefined> {
        return this.afs.doc<User>('users/' + this.id).snapshotChanges().pipe(map(action => {
            const data = action.payload.data();
            return {id: action.payload.id, ...data} as User;
        }));
    }
}
