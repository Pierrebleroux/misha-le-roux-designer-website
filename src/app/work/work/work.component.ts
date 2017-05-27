import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnChanges {
  @Input() project;

  loading: boolean = true
  onLoad() {
    this.loading = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loading = true;
  }
}
