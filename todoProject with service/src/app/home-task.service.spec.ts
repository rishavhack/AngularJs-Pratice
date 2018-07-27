import { TestBed, inject } from '@angular/core/testing';

import { HomeTaskService } from './home-task.service';

describe('HomeTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeTaskService]
    });
  });

  it('should be created', inject([HomeTaskService], (service: HomeTaskService) => {
    expect(service).toBeTruthy();
  }));
});
