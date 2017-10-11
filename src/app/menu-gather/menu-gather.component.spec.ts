import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGatherComponent } from './menu-gather.component';

describe('MenuGatherComponent', () => {
  let component: MenuGatherComponent;
  let fixture: ComponentFixture<MenuGatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
