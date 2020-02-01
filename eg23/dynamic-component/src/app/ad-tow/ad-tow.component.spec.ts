import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTowComponent } from './ad-tow.component';

describe('AdTowComponent', () => {
  let component: AdTowComponent;
  let fixture: ComponentFixture<AdTowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdTowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
