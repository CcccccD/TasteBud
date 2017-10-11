import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotMenuGatherComponent } from './hot-menu-gather.component';

describe('HotMenuGatherComponent', () => {
  let component: HotMenuGatherComponent;
  let fixture: ComponentFixture<HotMenuGatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotMenuGatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotMenuGatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
