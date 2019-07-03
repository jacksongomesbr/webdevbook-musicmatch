import { TestBed } from '@angular/core/testing';

import { MusicasService } from './musicas.service';

describe('MusicasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicasService = TestBed.get(MusicasService);
    expect(service).toBeTruthy();
  });
});
