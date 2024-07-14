import { TestBed } from '@angular/core/testing';

import { TechologyService } from './techology.service';

describe('TechologyService', () => {
  let service: TechologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
