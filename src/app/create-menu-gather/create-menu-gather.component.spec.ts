import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMenuGatherComponent } from './create-menu-gather.component';

describe('CreateMenuGatherComponent', () => {
  let component: CreateMenuGatherComponent;
  let fixture: ComponentFixture<CreateMenuGatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMenuGatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMenuGatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
