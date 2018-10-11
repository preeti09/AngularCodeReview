import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPublicLeftSideBarComponent } from './app-public-left-side-bar.component';

describe('AppPublicLeftSideBarComponent', () => {
  let component: AppPublicLeftSideBarComponent;
  let fixture: ComponentFixture<AppPublicLeftSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPublicLeftSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPublicLeftSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
