import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissonControlComponent } from './misson-control.component';

describe('MissonControlComponent', () => {
  let component: MissonControlComponent;
  let fixture: ComponentFixture<MissonControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissonControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissonControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
