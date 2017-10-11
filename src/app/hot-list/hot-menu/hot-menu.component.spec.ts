import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotMenuComponent } from './hot-menu.component';

describe('HotMenuComponent', () => {
  let component: HotMenuComponent;
  let fixture: ComponentFixture<HotMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
