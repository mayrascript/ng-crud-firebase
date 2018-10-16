import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators';
import { Observable } from 'rxjs/index';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { DogModel } from '../../../landing/dogs/models/dog.model';

@Injectable()
export class DogsService {

  private dogsCollection: AngularFirestoreCollection<DogModel>;
  dogsItems: Observable<DogModel[]>;
  path: string;

  constructor(
    private afs: AngularFirestore
  ) {
    this.path = 'dogs';
  }

  getAll(): Observable<DogModel[]> {

    this.dogsCollection = this.afs.
    collection<DogModel>(this.path);

    this.dogsItems = this.dogsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as DogModel;
        const _id = a.payload.doc.id;
        return { _id, ...data };
      }))
    );
    return this.dogsItems;
  }

  add(item: DogModel) {
    this.dogsCollection.add(item);
  }

  update(id: string, item: Partial<DogModel>) {
    this.afs.doc(`${this.path}/${id}`).update(item);
  }

  remove(id: string) {
    this.afs.doc(`${this.path}/${id}`).delete();
  }
}
