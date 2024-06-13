import { TestBed } from '@angular/core/testing';

import { FakeapiserviceService } from './fakeapiservice.service';

describe('FakeapiserviceService', () => {
  let service: FakeapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
