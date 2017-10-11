import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowGoComponent } from './follow-go.component';

describe('FollowGoComponent', () => {
  let component: FollowGoComponent;
  let fixture: ComponentFixture<FollowGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
