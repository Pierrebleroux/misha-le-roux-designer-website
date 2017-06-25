import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  menuItems = [
    { pos: 'top', label: 'Work', id: 'work', url: '/work' },
    { pos: 'right', label: 'Contact', id: 'contact', url: '/contact' },
    { pos: 'bottom', label: 'About', id: 'about', url: '/about' },
    { pos: 'left', label: 'Blog & Freebies', id: 'blog', url: '/blog' }
  ];

  path = '';

  constructor(private router:Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.path = router.url.split('/')[1];
        if (this.path === '') {
          this.path = 'home';
        }
      }
    });
  }
}
