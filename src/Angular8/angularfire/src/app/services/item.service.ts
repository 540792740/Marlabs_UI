import { Injectable } from '@angular/core';
import {AngularFirestore,
  AngularFirestoreCollection,
  // tslint:disable-next-line:import-spacing
  AngularFirestoreDocument}
  from 'angularfire2/firestore';
import {Item} from '../models/Item';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollection: AngularFirestoreCollection<Item>;
  // what is this line used for? this file i didnot use
  items: Observable<Item[]>;

  constructor(public afs: AngularFirestore) {
    // this.items = this.afs.collection('items').valueChanges();
    this.itemsCollection = this.afs.collection('auto');
    this.items = this.itemsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getItems() {
    return this.items;
  }
}

