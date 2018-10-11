import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CemeteryOwnerEditComponent } from './cemetery-owner-edit.component';

describe('CemeteryOwnerEditComponent', () => {
  let component: CemeteryOwnerEditComponent;
  let fixture: ComponentFixture<CemeteryOwnerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CemeteryOwnerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CemeteryOwnerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
