import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowBeComponent } from './follow-be.component';

describe('FollowBeComponent', () => {
  let component: FollowBeComponent;
  let fixture: ComponentFixture<FollowBeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowBeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
