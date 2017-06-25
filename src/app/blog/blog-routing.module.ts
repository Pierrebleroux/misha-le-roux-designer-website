import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';


const staticRoutes = [
  { path: 'blog', component: PostListComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(staticRoutes) ],
  exports: [ RouterModule ]
})
export class BlogRoutingModule {}
