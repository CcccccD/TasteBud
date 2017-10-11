import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSetComponent } from './account-set.component';

describe('AccountSetComponent', () => {
  let component: AccountSetComponent;
  let fixture: ComponentFixture<AccountSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
