import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { AddUserComponent } from './add-user/add-user.component';



@NgModule({
  declarations: [
    DetailComponent,
    HeaderComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Modul1Module { }
