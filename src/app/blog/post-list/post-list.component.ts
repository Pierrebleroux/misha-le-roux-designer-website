import { Component, OnInit } from '@angular/core';
import { BlogService} from '../blog.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'blog-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  blogService: BlogService;
  constructor(blogService: BlogService) {
    this.blogService = blogService;
  }

  ngOnInit() {
  }

}
