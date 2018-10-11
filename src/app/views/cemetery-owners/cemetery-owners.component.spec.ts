import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CemeteryOwnersComponent } from './cemetery-owners.component';

describe('CemeteryOwnersComponent', () => {
  let component: CemeteryOwnersComponent;
  let fixture: ComponentFixture<CemeteryOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CemeteryOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CemeteryOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
