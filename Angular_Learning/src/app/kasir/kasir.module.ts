import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KasirRoutingModule } from './kasir-routing.module';
import { ItemComponent } from './item/item.component';
import { PaymentComponent } from './payment/payment.component';
import { KasirComponent } from './kasir/kasir.component';


@NgModule({
  declarations: [
    ItemComponent,
    PaymentComponent,
    KasirComponent
  ],
  imports: [
    CommonModule,
    KasirRoutingModule
  ]
})
export class KasirModule { }
