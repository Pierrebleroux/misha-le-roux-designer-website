import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const staticRoutes = [
  { path: 'about', },
  { path: 'contact', },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(staticRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StaticPagesRoutingModule {}
