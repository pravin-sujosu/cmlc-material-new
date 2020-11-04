import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Postdatafrmstatus } from './postdatafrmstatus/postdatafrmstatus.component';

const routes: Routes = [
  {
    path: '',
    component: Postdatafrmstatus,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostdataModulestatusRoutingModule {}
