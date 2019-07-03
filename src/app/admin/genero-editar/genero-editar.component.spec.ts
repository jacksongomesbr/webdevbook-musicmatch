import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroEditarComponent } from './genero-editar.component';

describe('GeneroEditarComponent', () => {
  let component: GeneroEditarComponent;
  let fixture: ComponentFixture<GeneroEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
