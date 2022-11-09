import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KasirRoutingModule } from './kasir-routing.module';

import { PaymentComponent } from './payment/payment.component';
import { KasirComponent } from './kasir/kasir.component'

import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    PaymentComponent,
    KasirComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    KasirRoutingModule
  ]
})
export class KasirModule { }
