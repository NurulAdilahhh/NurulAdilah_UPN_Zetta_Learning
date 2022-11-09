import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path :'kasir',
    loadChildren:()=>import('./kasir/kasir.module').then(m=> m.KasirModule),
  },
  {
    path :'**',
    redirectTo: 'kasir'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
