import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaEditarComponent } from './musica-editar.component';

describe('MusicaEditarComponent', () => {
  let component: MusicaEditarComponent;
  let fixture: ComponentFixture<MusicaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
