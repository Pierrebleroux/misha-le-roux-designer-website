import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { BlogService } from './blog.service';

@NgModule({
  imports: [
    CommonModule
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
