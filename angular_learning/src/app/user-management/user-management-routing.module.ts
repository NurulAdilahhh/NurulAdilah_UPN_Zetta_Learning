import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './creation/creation.component';
import { DetailComponent } from './detail/detail.component';
import { UserEditComponent } from './edit/edit.component';
import { UserListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'list',
    pathMatch: 'full',
    component: UserListComponent
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: CreationComponent
  },
  {
    path: 'edit/:id',
    pathMatch: 'full',
    component: UserEditComponent
  },
  {
    path: 'detail/:id',
    pathMatch: 'full',
    component: DetailComponent
  },
  {
    path:'**',
    pathMatch: 'full',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
