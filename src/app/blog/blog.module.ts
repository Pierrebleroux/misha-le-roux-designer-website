import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { BlogService } from './blog.service';

import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [PostListComponent, PostComponent],
  exports: [
    PostListComponent,
    PostComponent
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
