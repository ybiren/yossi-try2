import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClazyComponent } from './clazy.component';

describe('ClazyComponent', () => {
  let component: ClazyComponent;
  let fixture: ComponentFixture<ClazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
