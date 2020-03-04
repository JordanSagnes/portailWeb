import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'pwe-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  private posts: any;
  private formIsVisible: boolean;
  constructor(private postService: PostService) {
    this.formIsVisible = false;
    this.posts = [];
  }

  ngOnInit() {
    this.postService.getAllPosts().subscribe((posts) => this.posts = posts);
  }
  showForm() {
    this.formIsVisible = true;
  }
  hideForm($event) {
    this.formIsVisible = false;
  }

}
