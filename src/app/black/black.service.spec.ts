import { TestBed } from '@angular/core/testing';

import { BlackService } from './black.service';

describe('BlackService', () => {
  let service: BlackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
