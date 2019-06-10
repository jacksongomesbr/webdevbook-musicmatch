import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaListaComponent } from './artista-lista.component';

describe('ArtistaListaComponent', () => {
  let component: ArtistaListaComponent;
  let fixture: ComponentFixture<ArtistaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
