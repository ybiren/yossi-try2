import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YossiComponent } from './yossi.component';

describe('YossiComponent', () => {
  let component: YossiComponent;
  let fixture: ComponentFixture<YossiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YossiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YossiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
