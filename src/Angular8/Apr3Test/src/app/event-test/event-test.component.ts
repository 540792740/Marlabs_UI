import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event-test',
  templateUrl: './event-test.component.html',
  styleUrls: ['./event-test.component.css']
})
export class EventTestComponent implements OnInit {
  countClick = 0;

  constructor() { }

  ngOnInit(): void {
  }

  removeClick() {
    this.countClick--;
  }

  addClick() {
    this.countClick++;

  }
}
