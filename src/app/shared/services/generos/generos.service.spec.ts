import { TestBed } from '@angular/core/testing';

import { GenerosService } from './generos.service';

describe('GenerosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerosService = TestBed.get(GenerosService);
    expect(service).toBeTruthy();
  });
});
