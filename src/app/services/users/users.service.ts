import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import User from '../../interfaces/user';
import {map} from 'rxjs/operators';
import Post from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private afs: AngularFirestore) { }

  public getAllUsers(): Observable<User[]> {
    return this.afs.collection<User>('users').snapshotChanges().pipe(
        map(actions => {
          return actions.map(user => {
            const data = user.payload.doc.data() as User;
            return {id: user.payload.doc.id, ...data};
          });
        }),
        map(usersList => {
          return usersList.sort((a: User, b: User) => a.register.localeCompare(b.register)).reverse();
        })
    );
  }

  public updateUser(user: User): Promise<void> {
    const userDoc = this.afs.doc<User>('users/' + user.id);
    return userDoc.update(user);
  }
}
