import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuClassifyComponent } from './menu-classify.component';

describe('MenuClassifyComponent', () => {
  let component: MenuClassifyComponent;
  let fixture: ComponentFixture<MenuClassifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuClassifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuClassifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
