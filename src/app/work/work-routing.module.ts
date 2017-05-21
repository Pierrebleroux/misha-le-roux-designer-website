import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkContainer } from './work/work.container';


const staticRoutes = [
  { path: 'work', component: WorkContainer },
  { path: 'work/:name', component: WorkContainer }
];

@NgModule({
  imports: [ RouterModule.forChild(staticRoutes) ],
  exports: [ RouterModule ]
})
export class WorkRoutingModule {}
