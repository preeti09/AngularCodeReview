import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPublicAsideComponent } from './app-public-aside.component';

describe('AppPublicAsideComponent', () => {
  let component: AppPublicAsideComponent;
  let fixture: ComponentFixture<AppPublicAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPublicAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPublicAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
