import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarArtistaComponent } from './cadastrar-artista.component';

describe('CadastrarArtistaComponent', () => {
  let component: CadastrarArtistaComponent;
  let fixture: ComponentFixture<CadastrarArtistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarArtistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
