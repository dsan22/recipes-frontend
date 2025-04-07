import { TestBed } from '@angular/core/testing';

import { RecepiesService } from './recepies.service';

describe('RecepiesService', () => {
  let service: RecepiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
