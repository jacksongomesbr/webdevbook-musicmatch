import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaCadastrarComponent } from './musica-cadastrar.component';

describe('MusicaCadastrarComponent', () => {
  let component: MusicaCadastrarComponent;
  let fixture: ComponentFixture<MusicaCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicaCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
