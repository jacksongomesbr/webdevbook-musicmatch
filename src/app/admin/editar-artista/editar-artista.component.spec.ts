import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarArtistaComponent } from './editar-artista.component';

describe('EditarArtistaComponent', () => {
  let component: EditarArtistaComponent;
  let fixture: ComponentFixture<EditarArtistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarArtistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
