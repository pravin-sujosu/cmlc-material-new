import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Postdatafrm } from './postdatafrm/postdatafrm.component';

const routes: Routes = [
  {
    path: '',
    component: Postdatafrm,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostdataModuleRoutingModule {}
