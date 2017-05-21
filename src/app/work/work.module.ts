import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { WorkContainer } from './work/work.container';

import { WorkRoutingModule } from './work-routing.module';
import { WorkService } from './work.service';

@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule
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
