import { TestBed } from '@angular/core/testing';

import { ValicacaoFormUtilService } from './valicacao-form-util.service';

describe('ValicacaoFormUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValicacaoFormUtilService = TestBed.get(ValicacaoFormUtilService);
    expect(service).toBeTruthy();
  });
});
