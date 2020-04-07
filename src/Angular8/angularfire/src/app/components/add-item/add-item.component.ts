import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import {list} from '../../models/Item';
import {from} from "rxjs";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: list={
    title:'' ,
    description:''
  };

  constructor(public itemService:ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.item.title != '' && this.item.description != ''){
      this.itemService.addItem(this.item);
      this.item.title='';
      this.item.description = '';
    }
  }

}
