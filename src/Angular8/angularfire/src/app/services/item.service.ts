import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
// import Item = firebase.analytics.Item;
import {Item} from '../models/Item';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('items').valueChanges();

  }
  getItems() {
    return this.items;
  }



}

