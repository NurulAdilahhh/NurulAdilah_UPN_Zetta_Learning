import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Item } from '../kasir/kasir.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  styles:['[bgaq]{  background-color: aquamarine;}',
  '[coba]{background: red; color: white}'

]
})
export class ItemComponent implements OnInit ,AfterViewInit {
  @Input('items') items: Item[]=[]
  @Output('itemAdded') onAddItem: EventEmitter<Item> = new EventEmitter<Item>();
  @ViewChild('bgaq') bgaq?:ElementRef;
  @ViewChild('al') bgRed?:ElementRef;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.items);
  }

  addItem(item: Item): void {
  this.onAddItem.emit(item)
  }

  ngAfterViewInit(){

    this.bgaq?.nativeElement.setAttribute('bgaq', '');
    this.bgRed?.nativeElement.setAttribute('coba', '');
   
  }
}
