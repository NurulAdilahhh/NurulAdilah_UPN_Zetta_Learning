import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KasirRoutingModule } from './kasir-routing.module';
import { KasirComponent } from './kasir/kasir.component';
import { PaymentComponent } from './payment/payment.component';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    KasirComponent,
    PaymentComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    KasirRoutingModule
  ]
})
export class KasirModule { }
