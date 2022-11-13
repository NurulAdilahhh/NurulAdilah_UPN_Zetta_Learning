import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './employee-detail/employee-detail.component';
import { EmployeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path: 'table',
    pathMatch: 'full',
    component: EmployeComponent
  },
  {
    path: 'detail/id',
    pathMatch:'full',
    component:DetailComponent
  },
  {
    path: '**',
    pathMatch:'full',
    redirectTo : 'table'

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployRoutingModule { }
