import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployRoutingModule } from './employee-routing.module';
import { DetailComponent } from './employee-detail/employee-detail.component';
import { EmployeComponent } from './employee/employee.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DetailComponent,
    EmployeComponent
  ],
  imports: [
    CommonModule,
    EmployRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class EmployModule { }
