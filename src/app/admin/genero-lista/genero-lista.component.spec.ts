import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroListaComponent } from './genero-lista.component';

describe('GeneroListaComponent', () => {
  let component: GeneroListaComponent;
  let fixture: ComponentFixture<GeneroListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
