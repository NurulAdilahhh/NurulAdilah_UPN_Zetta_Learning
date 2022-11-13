import { Component, OnInit,Output,EventEmitter,Input,SimpleChange, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';
import { Selecteditem } from '../kasir/kasir.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, AfterContentChecked {
  @Input() items!: Selecteditem[];
  @Output () itemChanges : EventEmitter<Selecteditem[]> = new EventEmitter <Selecteditem[]>;

  public total :number = 0;

  constructor() { }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
