import { Component, OnInit } from '@angular/core';
import { BlogService} from '../blog.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'blog-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  blogService: BlogService;
  mainPost;
  freebies;
  constructor(blogService: BlogService) {
    this.blogService = blogService;
    
    this.mainPost = {
      title: 'Why Design Matters',
      date: new Date(),
      link: 'https://medium.com/@mishaleroux',
      image: '/assets/misha-logo.png'
    };

    this.freebies = [
      {}
    ];
  }
}
