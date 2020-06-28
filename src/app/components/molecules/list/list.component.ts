import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items: Array<any>;
  @Output() itemSelected = new EventEmitter<{ data: any }>();
  currentPage: any;

  constructor() {}

  ngOnInit() {}

  clickItem(item: any) {
    this.itemSelected.emit({ data: item });
  }
}
