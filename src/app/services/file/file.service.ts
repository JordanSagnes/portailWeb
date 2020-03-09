import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import * as firebase from 'firebase';
import File from '../../interfaces/file';
import {AngularFireStorage} from '@angular/fire/storage';
import {concatMap, flatMap, map, switchMap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FileService {

    constructor(private firestore: AngularFireStorage) {
    }

    public getAllFiles(): File[] {
        const files: File[] = [];
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
