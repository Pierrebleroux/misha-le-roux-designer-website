import { Component } from '@angular/core';

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
}
