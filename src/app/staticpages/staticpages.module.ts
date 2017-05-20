import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { StaticPagesRoutingModule } from './staticpages-routing.module';
import { BlogModule } from '../blog/blog.module';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  imports: [
    CommonModule,
    BlogModule,
    StaticPagesRoutingModule,
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent
  ]
})
export class StaticpagesModule { }
