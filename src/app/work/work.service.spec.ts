import { TestBed, inject } from '@angular/core/testing';

import { WorkService } from './work.service';

describe('WorkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkService]
    });
  });

  it('should ...', inject([WorkService], (service: WorkService) => {
    expect(service).toBeTruthy();
  }));
});
