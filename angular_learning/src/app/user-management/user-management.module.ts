import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserListComponent } from './list/list.component';
import { CreationComponent } from './creation/creation.component';
import { DetailComponent } from './detail/detail.component';
import { UserEditComponent } from './edit/edit.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list'
import {ReactiveFormsModule} from '@angular/forms';
import { UpperCasePipe } from '@angular/common';


@NgModule({
  declarations: [
    UserListComponent,
    CreationComponent,
    DetailComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    UpperCasePipe,
    MatListModule
  ]
})
export class UserManagementModule { }