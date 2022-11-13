import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    DetailComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Modul2Module { }
