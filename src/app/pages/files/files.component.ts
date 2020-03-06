import { Component, OnInit } from '@angular/core';
import {FileService} from '../../services/file/file.service';
import {AuthService} from '../../services/auth/auth.service';
import User from '../../interfaces/user';

@Component({
  selector: 'pwe-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  private formIsVisible: boolean;
  private files = [];
  private userLogged: User | undefined;

  constructor(private filerService: FileService, private authService: AuthService) {
    this.formIsVisible = false;
  }

  ngOnInit() {
    this.files = this.filerService.getAllFiles();
    this.authService.getUserDocument().subscribe(user => this.userLogged = user);
  }
  canAddFile() {
    return this.userLogged !== undefined && (this.userLogged.role === 'admin' || this.userLogged.role === 'membre');
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
