import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraveAllocationComponent } from './grave-allocation.component';

describe('GraveAllocationComponent', () => {
  let component: GraveAllocationComponent;
  let fixture: ComponentFixture<GraveAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraveAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraveAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
