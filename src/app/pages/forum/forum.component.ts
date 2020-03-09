import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post/post.service';
import {AuthService} from '../../services/auth/auth.service';
import User from '../../interfaces/user';

@Component({
  selector: 'pwe-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  private posts: any;
  private formIsVisible: boolean;
  private userLogged: User | undefined;

  constructor(private postService: PostService, private authService: AuthService) {
    this.formIsVisible = false;
    this.posts = [];
  }
  ngOnInit() {
    this.postService.getAllPosts().subscribe((posts) => this.posts = posts);
    this.authService.getUserDocument().subscribe(user => this.userLogged = user);
  }
  canAddPost() {
    return this.userLogged !== undefined && this.userLogged.role === 'admin';
  }
  showForm() {
    this.formIsVisible = true;
  }
  hideForm($event) {
    this.formIsVisible = false;
  }

}
