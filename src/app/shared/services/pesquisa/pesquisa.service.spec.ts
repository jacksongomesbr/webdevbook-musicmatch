import { TestBed } from '@angular/core/testing';

import { PesquisaService } from './pesquisa.service';

describe('PesquisaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PesquisaService = TestBed.get(PesquisaService);
    expect(service).toBeTruthy();
  });
});
