import { TestBed } from '@angular/core/testing';

import { DogBreedsService } from './dog-breeds.service';

describe('DogBreedsService', () => {
  let service: DogBreedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogBreedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
