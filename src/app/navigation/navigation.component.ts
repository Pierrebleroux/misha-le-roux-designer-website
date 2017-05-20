import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  menuItems = [
    { pos: 'top', label: 'Work', url: '/work' },
    { pos: 'right', label: 'Contact', url: '/contact' },
    { pos: 'bottom', label: 'About', url: '/about' },
    { pos: 'left', label: 'Blog', url: '/blog' }
  ];

  path = '';

  constructor(private router:Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.path = router.url.substr(1);
        if (this.path === '') {
          this.path = 'home';
        }
      }
    });
  }
}
