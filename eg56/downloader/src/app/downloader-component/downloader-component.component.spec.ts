import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloaderComponentComponent } from './downloader-component.component';

describe('DownloaderComponentComponent', () => {
  let component: DownloaderComponentComponent;
  let fixture: ComponentFixture<DownloaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloaderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
