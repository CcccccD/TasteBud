import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotListMenuComponent } from './hot-list-menu.component';

describe('HotListMenuComponent', () => {
  let component: HotListMenuComponent;
  let fixture: ComponentFixture<HotListMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotListMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
