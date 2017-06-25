import { Component, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnChanges {
  @Input() project;
  @ViewChild('usefulSwiper') swiperContainer;

  imageId: number = 0;
  displayImage: String;
  config = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30,
      misha_images: [],
      grabCursor: true
  };
  showSwiper = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showSwiper = false;
      }
    });
  }

  loading: boolean = true
  onLoad() {
    this.loading = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.showSwiper = true;
    this.loading = true;
    this.imageId = 0;
    if (this.project) {
      this.config.misha_images = this.project.fields.PrimaryImage;
      this.displayImage = this.project.fields.PrimaryImage[0].url
    }
    if (this.swiperContainer) {
      this.swiperContainer.Swiper.slideTo(0);
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

  hideSwiper() {
    this.showSwiper = false;
  }
}
