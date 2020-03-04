import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import * as firebase from 'firebase';
import {AngularFireStorage} from '@angular/fire/storage';
import {concatMap, flatMap, map, switchMap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FileService {

    constructor(private firestore: AngularFireStorage) {
    }

    public getAllFiles(): any {
      let files = [];
      this.firestore.storage.ref().listAll().then(res => {
        res.items.forEach((file) => {
          file.getDownloadURL().then((url) => {
            files.push({name: file.name, url});
          });
        });
      });
      return files;
    }

}
