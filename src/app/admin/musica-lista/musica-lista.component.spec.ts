import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaListaComponent } from './musica-lista.component';

describe('MusicaListaComponent', () => {
  let component: MusicaListaComponent;
  let fixture: ComponentFixture<MusicaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
