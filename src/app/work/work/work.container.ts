import { Component, OnInit } from '@angular/core';
import { WorkService } from '../work.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  template: `
    <app-work
      [project]="project | async"
    ></app-work>
  `
})
export class WorkContainer implements OnInit {

  private routeSub;
  private workSub;
  private projectName;
  private work;
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
      console.log(work);
      this.updateProject();
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.workSub.unsubscribe();
  }

  updateProject() {
    if (this.projectName && this.work) {
      const pos = this.work.map((p) => p.fields.Identifier).indexOf(this.projectName);
      this.project.next(this.work[pos] || WorkContainer.NOT_EXIST_PROJECT);
    } else if (this.work) {
      this.router.navigate(['/work', this.work[0].fields.Identifier]);
    }
  }
}
