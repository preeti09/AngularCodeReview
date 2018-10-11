import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLeftSideBarComponent } from './app-left-side-bar.component';

describe('AppLeftSideBarComponent', () => {
  let component: AppLeftSideBarComponent;
  let fixture: ComponentFixture<AppLeftSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLeftSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLeftSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
