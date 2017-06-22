import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNumberComponent } from './new-number.component';

describe('NewNumberComponent', () => {
  let component: NewNumberComponent;
  let fixture: ComponentFixture<NewNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
