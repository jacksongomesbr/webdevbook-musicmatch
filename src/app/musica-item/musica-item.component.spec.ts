import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaItemComponent } from './musica-item.component';

describe('MusicaItemComponent', () => {
  let component: MusicaItemComponent;
  let fixture: ComponentFixture<MusicaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
