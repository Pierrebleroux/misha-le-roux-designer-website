import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../partials/partials.module';
import { SwiperModule } from 'angular2-useful-swiper';

import { WorkComponent } from './work/work.component';
import { WorkContainer } from './work/work.container';

import { WorkRoutingModule } from './work-routing.module';
import { WorkService } from './work.service';

import { AngularLoaders } from 'angular-loaders';

@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule,
    PartialsModule,
    SwiperModule,
    AngularLoaders.forRoot()
  ],
  declarations: [
    WorkComponent,
    WorkContainer
  ],
  providers: [
    WorkService
  ]
})
export class WorkModule { }
