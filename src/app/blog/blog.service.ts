import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { BLOG_RSS_URL } from './blog.constants';


@Injectable()
export class BlogService {

  private blogPosts = new BehaviorSubject<Object>(null);
  public blogPosts$ = this.blogPosts.asObservable();

  constructor(private http: Http) {
    this.fetchBlogPosts();
  }

  fetchBlogPosts() {
    this.http.get(BLOG_RSS_URL)
      .map(res => res.json())
      .subscribe((res) => this.blogPosts.next(res));
  }

}
