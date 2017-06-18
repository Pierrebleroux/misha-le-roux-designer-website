import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from './social-links/social-links.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SocialLinksComponent
  ],
  exports: [
    SocialLinksComponent
  ]
})
export class PartialsModule { }
