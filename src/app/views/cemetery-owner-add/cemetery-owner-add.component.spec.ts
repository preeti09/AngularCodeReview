import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CemeteryOwnerAddComponent } from './cemetery-owner-add.component';

describe('CemeteryOwnerAddComponent', () => {
  let component: CemeteryOwnerAddComponent;
  let fixture: ComponentFixture<CemeteryOwnerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CemeteryOwnerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CemeteryOwnerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
