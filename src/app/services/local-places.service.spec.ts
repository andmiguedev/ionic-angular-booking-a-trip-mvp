import { TestBed } from '@angular/core/testing';

import { LocalPlacesService } from './local-places.service';

describe('LocalPlacesService', () => {
  let service: LocalPlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalPlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
