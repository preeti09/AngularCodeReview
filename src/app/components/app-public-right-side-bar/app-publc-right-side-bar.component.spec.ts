import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPublicRightSideBarComponent } from './app-public-right-side-bar.component';

describe('AppPublicRightSideBarComponent', () => {
  let component: AppPublicRightSideBarComponent;
  let fixture: ComponentFixture<AppPublicRightSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPublicRightSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPublicRightSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
