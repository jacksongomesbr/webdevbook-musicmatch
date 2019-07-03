import { TestBed } from '@angular/core/testing';

import { ArtistasService } from './artistas.service';

describe('ArtistasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistasService = TestBed.get(ArtistasService);
    expect(service).toBeTruthy();
  });
});
