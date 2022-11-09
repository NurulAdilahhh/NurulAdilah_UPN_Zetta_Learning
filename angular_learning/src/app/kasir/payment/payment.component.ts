

import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild, ElementRef, AfterContentChecked, AfterViewInit,  } from '@angular/core';
import { SelectedItem } from '../kasir/kasir.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  styles : ['[bgAqua]{ Background-color: antiquewhite;}',
            '[bgPuprple]{background-color: aquamarine}'
],

})

export class PaymentComponent implements OnInit,AfterContentChecked,AfterViewInit {

@ViewChild('bgAqua') bgAqua?:ElementRef;
@Input() items: SelectedItem[]=[]
@Output() itemsChange : EventEmitter<SelectedItem[]> = new EventEmitter <SelectedItem[]>()
@ViewChild('bgGreen') bgGreen?:ElementRef;
public total :number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.bgAqua?.nativeElement.setAttribute('bgAqua', '');
    this.bgGreen?.nativeElement.setAttribute('bgGreen', ''); 
  }

  
  ngAfterContentChecked(): void {

 
    this.total = this.items.reduce((total, item) => total += item.amount * item.Price , 0)
  }

 
  removeItem(itemToBeRemoved:SelectedItem){

    const itemIndex = this.items.findIndex(({id}) => id ===itemToBeRemoved.id)
  
    if(this.items[itemIndex].amount>1){
      this.items[itemIndex].amount-=1
    }
    else{
      this.items.splice(itemIndex,1);
    }
  }
}


