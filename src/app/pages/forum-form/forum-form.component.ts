import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {PostService} from '../../services/post/post.service';
import Post from '../../interfaces/post';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'pwe-forum-form',
  templateUrl: './forum-form.component.html',
  styleUrls: ['./forum-form.component.scss']
})
export class ForumFormComponent implements OnInit {
  private model: Post;
  private Editor = ClassicEditor;
  @Output('hideForm') hideForm = new EventEmitter<void>();
  constructor(private postService: PostService, private toastr: ToastrService) {
    this.initPost();
  }

  ngOnInit() {}
  initPost() {
    this.model = {
      title : '',
      content: '',
    };
  }
  addPost() {
    this.postService.addPost(this.model);
    this.initPost();
    this.toastr.success('L\'article a bien été ajouté');
    this.hideForm.emit();
  }

}
