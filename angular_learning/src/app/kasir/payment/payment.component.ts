import { Component, OnInit,Output,EventEmitter,Input,SimpleChange, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';
import { Selecteditem } from '../kasir/kasir.component';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit,AfterContentChecked {
  @Input() items!: Selecteditem[];
  @Output () itemChanges : EventEmitter<Selecteditem[]> = new EventEmitter <Selecteditem[]>;

  public total :number = 0;


  constructor() { }

  ngOnInit(): void {
  }

 
  
  ngAfterContentChecked(): void {
 
    this.total = this.items.reduce((total, item) => total += item.amount * item.Price , 0)
  }

  removeItem(itemToBeRemoved:Selecteditem){
    const itemIndex = this.items.findIndex(({id}) => id ===itemToBeRemoved.id)
  
    if(this.items[itemIndex].amount>1){
      this.items[itemIndex].amount-=1
    }
    else{
      this.items.splice(itemIndex,1);
    }
   
    
  
  }

}