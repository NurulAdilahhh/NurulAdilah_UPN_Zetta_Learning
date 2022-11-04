
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { item } from '../kasir/kasir.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input('items') items: item[]=[]
  @Output ('itemAdded') onAddItem : EventEmitter<item> = new EventEmitter<item>()

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item :item) : void{
    this.onAddItem.emit(item)
  }

}