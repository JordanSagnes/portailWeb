import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pwe-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.scss']
})
export class FileFormComponent implements OnInit {
  private fileName = '';
  @Output('hideForm') hideForm = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  importFile(event) {
    if (event.target.files.length !== 0) {
      this.fileName = event.target.files[0].name;
    } else {
      this.fileName = '';
    }
  }
  dragFile(event) {
    this.fileName = event[0].name;
  }

}
