import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {PostService} from '../../services/post/post.service';
import Post from '../../interfaces/post';
import {SnackBarService} from '../../shared/snack-bar/snack-bar.service';
import * as moment from 'moment';

@Component({
  selector: 'pwe-forum-form',
  templateUrl: './forum-form.component.html',
  styleUrls: ['./forum-form.component.scss']
})
export class ForumFormComponent implements OnInit {
  private model: Post;
  private Editor = ClassicEditor;
  @Output() hideForm = new EventEmitter<void>();
  constructor(private postService: PostService, private snackBarService: SnackBarService) {
    this.initPost();
  }

  ngOnInit() {}
  initPost() {
    this.model = {
      title : '',
      content: '',
      date: moment().format('YYYY-MM-DD')
    };
  }
  addPost() {
    this.postService.addPost(this.model);
    this.initPost();
    this.snackBarService.show('L\'article a bien été ajouté', 'success');

    this.hideForm.emit();
  }

}
