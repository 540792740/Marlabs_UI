import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import {list} from '../../models/Item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: list[];
  editState: boolean = false;
  itemToEdit: list;
  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }

  deleteItem(event, item) {
    this.clearState();
    this.itemService.deleteItem(item);
  }
  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

  editItem(event, item:list) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: list) {
    this.itemService.updateItem(item);
    this.clearState();
  }
}
