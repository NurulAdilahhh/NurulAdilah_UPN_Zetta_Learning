
import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {Observable} from 'rxjs';
import { item, KasirService } from '../kasir.service';
export interface items {id : number , name : string, Price : number}




@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],

})

export class ItemComponent implements OnInit {
  public items : Observable<item[]> | undefined



  constructor(private kasirService: KasirService) { 
    this.items = this.kasirService.items$
  }

  ngOnInit(): void {
  }

  addItem(item: item): void {
  this.kasirService.addItem(item);
   
  }
}
