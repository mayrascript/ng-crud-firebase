import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Dog } from '../../models/dog';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  private dogsCollection!: AngularFirestoreCollection<Dog>;
  dogsItems$!: Observable<Dog[]>;

  readonly path = 'dogs';

  constructor(private afs: AngularFirestore) {
    this.dogsCollection = this.afs.collection<Dog>(this.path);
    this.dogsItems$ = this.dogsCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Dog;
          const _id = a.payload.doc.id;
          return { _id, ...data };
        })
      )
    );
  }

  getById(id: string) {
    return this.afs
      .doc(`${this.path}/${id}`)
      .get()
      .pipe(map((res) => res.data()));
  }

  add(dog: Dog) {
    return this.dogsCollection
      .add({
        ...dog,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  update(id: string, item: Partial<Dog>) {
    return this.afs
      .doc(`${this.path}/${id}`)
      .update({
        ...item,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
  }

  remove(id: string) {
    this.afs.doc(`${this.path}/${id}`).delete();
  }
}
