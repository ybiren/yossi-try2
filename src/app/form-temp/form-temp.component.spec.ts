import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTempComponent } from './form-temp.component';

describe('FormTempComponent', () => {
  let component: FormTempComponent;
  let fixture: ComponentFixture<FormTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
