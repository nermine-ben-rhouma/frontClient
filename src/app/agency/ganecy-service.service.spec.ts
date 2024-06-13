import { TestBed } from '@angular/core/testing';

import { GanecyServiceService } from './ganecy-service.service';

describe('GanecyServiceService', () => {
  let service: GanecyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GanecyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
