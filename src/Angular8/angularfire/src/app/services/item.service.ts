import { Injectable } from '@angular/core';
import {AngularFirestore,
  AngularFirestoreCollection,
AngularFirestoreDocument}
  from 'angularfire2/firestore';
import {list} from '../models/Item';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollection: AngularFirestoreCollection<list>;
  items: Observable<list[]>;
  itemDoc : AngularFirestoreDocument<list>;

  constructor(public afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('auto',  ref=>ref.orderBy('title','asc'));
    this.items = this.itemsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as list;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getItems() {
    return this.items;
  }

  addItem(item: list) {
    this.itemsCollection.add(item);
  }

  deleteItem(item: list) {
    this.itemDoc = this.afs.doc(`auto/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item: list) {
    this.itemDoc = this.afs.doc(`auto/${item.id}`);
    this.itemDoc.update(item);
  }
}

