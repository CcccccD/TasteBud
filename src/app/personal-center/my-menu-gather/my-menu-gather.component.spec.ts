import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMenuGatherComponent } from './my-menu-gather.component';

describe('MyMenuGatherComponent', () => {
  let component: MyMenuGatherComponent;
  let fixture: ComponentFixture<MyMenuGatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMenuGatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMenuGatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
