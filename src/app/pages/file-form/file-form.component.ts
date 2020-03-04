import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SnackBarService} from '../../shared/snack-bar/snack-bar.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';

@Component({
  selector: 'pwe-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.scss']
})
export class FileFormComponent implements OnInit {
  private fileName = '';
  private file: any;
  private uploadProgress = new Observable<number|undefined>();
  @Output('hideForm') hideForm = new EventEmitter<void>();
  constructor(private afStorage: AngularFireStorage, private snackBarService: SnackBarService) {}

  ngOnInit() {
  }
  importFile(event) {
    if (event.target.files.length !== 0) {
      this.fileName = event.target.files[0].name;
      this.file =  event.target.files[0];
    } else {
      this.fileName = '';
      this.file = null;
    }
  }
  dragFile(event) {
    this.fileName = event[0].name;
    this.file =  event[0];
  }
  uploadFile() {
    if (this.file != null) {
      const ref = this.afStorage.ref(this.fileName);
      const task = ref.put(this.file);
      this.uploadProgress = task.percentageChanges();
      task.then(() => {
        document.location.reload();
      });
    } else {
      this.snackBarService.show('Veuillez selectionner un fichier', 'error');
    }
  }

}
