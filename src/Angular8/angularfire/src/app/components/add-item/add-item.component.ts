import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import {Item} from '../../models/Item';
import {from} from "rxjs";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item={

    title:'' ,
    description:''
  };

  constructor(public itemService:ItemService) { }

  ngOnInit(): void {
  }

}
