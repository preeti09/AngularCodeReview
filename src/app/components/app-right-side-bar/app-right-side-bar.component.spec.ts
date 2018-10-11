import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRightSideBarComponent } from './app-right-side-bar.component';

describe('AppRightSideBarComponent', () => {
  let component: AppRightSideBarComponent;
  let fixture: ComponentFixture<AppRightSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRightSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRightSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
