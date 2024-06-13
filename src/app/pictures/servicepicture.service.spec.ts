import { TestBed } from '@angular/core/testing';

import { ServicepictureService } from './servicepicture.service';

describe('ServicepictureService', () => {
  let service: ServicepictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicepictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
