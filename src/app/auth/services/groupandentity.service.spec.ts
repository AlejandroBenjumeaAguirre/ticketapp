import { TestBed } from '@angular/core/testing';

import { GroupandentityService } from './groupandentity.service';

describe('GroupandentityService', () => {
  let service: GroupandentityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupandentityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
