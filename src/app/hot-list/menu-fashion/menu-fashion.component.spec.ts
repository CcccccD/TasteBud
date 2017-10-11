import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFashionComponent } from './menu-fashion.component';

describe('MenuFashionComponent', () => {
  let component: MenuFashionComponent;
  let fixture: ComponentFixture<MenuFashionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFashionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
