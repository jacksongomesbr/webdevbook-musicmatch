import { TestBed } from '@angular/core/testing';

import { DadosBaseService } from './dados-base.service';

describe('DadosBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadosBaseService = TestBed.get(DadosBaseService);
    expect(service).toBeTruthy();
  });
});
