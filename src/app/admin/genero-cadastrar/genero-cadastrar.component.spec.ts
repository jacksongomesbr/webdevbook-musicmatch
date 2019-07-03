import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroCadastrarComponent } from './genero-cadastrar.component';

describe('GeneroCadastrarComponent', () => {
  let component: GeneroCadastrarComponent;
  let fixture: ComponentFixture<GeneroCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneroCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
