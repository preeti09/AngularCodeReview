import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementToolAddDataComponent } from './management-tool-add-data.component';

describe('ManagementToolAddDataComponent', () => {
  let component: ManagementToolAddDataComponent;
  let fixture: ComponentFixture<ManagementToolAddDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementToolAddDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementToolAddDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
