import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class WorkService {

  private work = new BehaviorSubject<Array<Object>>(null);

  public WORK_URL = 'https://airtable-proxy.glitch.me/api/appKuL4iStSeInIpD/Work?filterByFormula=Live';
  public work$ = this.work.asObservable();

  constructor(private http: Http) {
    this.fetchWork();
  }

  fetchWork() {
    this.http.get(this.WORK_URL)
      .map(res => res.json())
      .subscribe(data => this.work.next(data.records));
  }
}
