import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMenuComponent } from './favorite-menu.component';

describe('FavoriteMenuComponent', () => {
  let component: FavoriteMenuComponent;
  let fixture: ComponentFixture<FavoriteMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
