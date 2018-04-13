import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubChildComponent } from './sub-child.component';

describe('SubChildComponent', () => {
  let component: SubChildComponent;
  let fixture: ComponentFixture<SubChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
