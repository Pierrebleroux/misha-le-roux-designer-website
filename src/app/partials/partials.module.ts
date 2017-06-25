import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from './social-links/social-links.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SocialLinksComponent,
    LoaderComponent
  ],
  exports: [
    SocialLinksComponent,
    LoaderComponent
  ]
})
export class PartialsModule { }
