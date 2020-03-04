import { Component, OnInit } from '@angular/core';
import {FileService} from '../../services/file/file.service';

@Component({
  selector: 'pwe-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  private formIsVisible: boolean;
  private files = [];
  constructor(private filerService: FileService) {
    this.formIsVisible = false;
  }

  ngOnInit() {
    this.files = this.filerService.getAllFiles();
  }
  isImage(file) {
    const imageExtensions = ['jpg', 'svg', 'png', 'gif', 'bmp', 'jpeg'];
    let extension = file.name.split('.');
    extension = extension[extension.length - 1].toLocaleLowerCase();
    return imageExtensions.includes(extension);
  }
  showForm() {
    this.formIsVisible = true;
  }
  hideForm($event) {
    this.formIsVisible = false;
  }

}
