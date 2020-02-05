import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import Post from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afs: AngularFirestore) { }

  public getAllPosts(): Observable<Post[]> {
    return this.afs.collection<Post>('posts').valueChanges();
  }

  public addPost(post: Post): void {
    this.afs.collection<Post>('posts').add(post);
  }
}
