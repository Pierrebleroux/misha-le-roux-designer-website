import { Component, OnInit } from '@angular/core';
import { WorkService } from '../work.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  template: `
    <div class="back-home" [routerLink]="['/']">Home</div>
    <div class="project-menu">
      <div *ngFor="let p of work" [routerLink]="['/work', p.fields.Identifier]" class="item" [class.active]="p.fields.Identifier == projectName">
        <span>{{p.fields.Title}}</span>
      </div>
    </div>
    <div class="project-nav">
      <!-- <div class="left-container" *ngIf="projectIndex > 0" [routerLink]="['/work', work[projectIndex-1].fields.Identifier]">
        <div class="left white arrow small"></div>
      </div>
      <div class="right-container" *ngIf="work && (projectIndex < work.length - 1)" [routerLink]="['/work', work[projectIndex+1].fields.Identifier]"> 
        <div class="right white arrow small" ></div>
      </div> -->
    </div>
    <app-work [project]="project | async"></app-work>
  `,
  styleUrls: ['./work.component.scss']
})
export class WorkContainer implements OnInit {

  private routeSub;
  private workSub;
  public projectName;
  public work;
  public projectIndex = 0;
  public project = new BehaviorSubject<Object>(null);

  public static NOT_EXIST_PROJECT = {
    fields: {
      Identifier: 'not-exist'
    }
  };

  constructor(
    public workService: WorkService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.projectName = params['name'];
      this.updateProject();
    });
    this.workSub = this.workService.work$.subscribe((work) => {
      this.work = work;
      this.updateProject();
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.workSub.unsubscribe();
  }

  updateProject() {
    if (this.projectName && this.work) {
      this.projectIndex = this.work.map((p) => p.fields.Identifier).indexOf(this.projectName);
      this.project.next(this.work[this.projectIndex] || WorkContainer.NOT_EXIST_PROJECT);
    } else if (this.work) {
      this.router.navigate(['/work', this.work[0].fields.Identifier]);
    }
  }
}
