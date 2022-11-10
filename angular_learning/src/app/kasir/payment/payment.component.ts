import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { KasirService, Selecteditem } from '../kasir.service';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit,AfterContentChecked {
  public items : Observable<Selecteditem[]>
  public total : Observable<number>

  constructor(private kasirService : KasirService) { 
    console.log("hahaha");
    
     this.items = this.kasirService.selectedItems$
     this.total = this.kasirService.selectedItems$.pipe(
      map((items) => items.reduce((total, item) => total += item.amount * item.Price , 0))
    )
     
  }

  ngOnInit(): void {
  }

 
  
  ngAfterContentChecked() {
    
    this.total = this.kasirService.selectedItems$.pipe(
      map((items) => items.reduce((total, item) => total += item.amount * item.Price , 0))
    )
    
    
  }

removeitem(item :Selecteditem){
  this.kasirService.removeItem(item)
}

}