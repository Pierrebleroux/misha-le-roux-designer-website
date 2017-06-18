import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../partials/partials.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { StaticPagesRoutingModule } from './staticpages-routing.module';
import { BlogModule } from '../blog/blog.module';
import { NotfoundComponent } from './notfound/notfound.component';

import { AngularLoaders } from 'angular-loaders';

@NgModule({
  imports: [
    CommonModule,
    BlogModule,
    StaticPagesRoutingModule,
    PartialsModule,
    AngularLoaders.forRoot()
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent
  ]
})
export class StaticpagesModule { }
