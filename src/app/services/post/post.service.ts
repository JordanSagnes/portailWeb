import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import Post from '../../interfaces/post';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afs: AngularFirestore) { }

  public getAllPosts(): Observable<Post[]> {
    return this.afs.collection<Post>('posts').valueChanges().pipe(map(results => {
      return results.sort((a: Post, b: Post) => a.date.localeCompare(b.date)).reverse();
    }));
  }

  public addPost(post: Post): void {
    this.afs.collection<Post>('posts').add(post);
  }
}
