import { Component, OnInit } from '@angular/core';
import Post from '../../interfaces/post';
import User from '../../interfaces/user';
import File from '../../interfaces/file';
import {PostService} from '../../services/post/post.service';
import {UsersService} from '../../services/users/users.service';
import {FileService} from '../../services/file/file.service';

@Component({
  selector: 'pwe-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  private posts: Post[] = [];
  private users: User[] = [];
  private files: File[] = [];
  private readonly MAX_ITEMS = 3;
  constructor(
      private postService: PostService,
      private usersService: UsersService,
      private fileService: FileService,
  ) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(newPosts => {
      this.posts = newPosts.slice(0, Math.min(newPosts.length, this.MAX_ITEMS));
    });

    this.usersService.getAllUsers().subscribe(newUsers => {
      this.users = newUsers.slice(0, Math.min(newUsers.length, this.MAX_ITEMS));
    });

    this.files = this.fileService.getAllFiles();
  }
  sortFile(): File[] {
    let filesSort: File[] = this.files;
    filesSort.sort((a: File, b: File) => a.date.localeCompare(b.date));
    filesSort = filesSort.reverse().slice(0, Math.min(filesSort.length, this.MAX_ITEMS));
    return filesSort;
  }

}
