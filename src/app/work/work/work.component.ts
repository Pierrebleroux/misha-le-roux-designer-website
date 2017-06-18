import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnChanges {
  @Input() project;
  imageId: number = 0;
  displayImage: String;

  loading: boolean = true
  onLoad() {
    this.loading = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loading = true;
    this.imageId = 0;
    if (this.project) {
      this.displayImage = this.project.fields.PrimaryImage[0].url
    }
  }

  changeImage(num: number) {
    if (this.project) {
        this.loading = true;
        if (num < 0) {
          num = this.project.fields.PrimaryImage.length + num;
        }
        this.imageId = num % this.project.fields.PrimaryImage.length;
        this.displayImage = this.project.fields.PrimaryImage[this.imageId].url;
    }
  }
}
