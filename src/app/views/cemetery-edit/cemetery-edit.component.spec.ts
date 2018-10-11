import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CemeteryEditComponent } from './cemetery-edit.component';

describe('CemeteryEditComponent', () => {
  let component: CemeteryEditComponent;
  let fixture: ComponentFixture<CemeteryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CemeteryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CemeteryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
