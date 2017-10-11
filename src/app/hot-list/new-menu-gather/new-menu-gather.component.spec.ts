import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMenuGatherComponent } from './new-menu-gather.component';

describe('NewMenuGatherComponent', () => {
  let component: NewMenuGatherComponent;
  let fixture: ComponentFixture<NewMenuGatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMenuGatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMenuGatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
