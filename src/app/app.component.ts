import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="main-container">
      <navigation></navigation>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';
}
