import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPublicHeaderComponent } from './app-public-header.component';

describe('AppPublicHeaderComponent', () => {
  let component: AppPublicHeaderComponent;
  let fixture: ComponentFixture<AppPublicHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPublicHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPublicHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
