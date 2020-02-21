import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pwe-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  private formIsVisible: boolean;
  constructor() {
    this.formIsVisible = false;
  }

  ngOnInit() {
  }
  showForm() {
    this.formIsVisible = true;
  }
  hideForm($event) {
    this.formIsVisible = false;
  }

}
