import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CemeteryAddComponent } from './cemetery-add.component';

describe('CemeteryAddComponent', () => {
  let component: CemeteryAddComponent;
  let fixture: ComponentFixture<CemeteryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CemeteryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CemeteryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
