import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsFormEditComponent } from './accounts-form-edit.component';

describe('AccountsFormEditComponent', () => {
  let component: AccountsFormEditComponent;
  let fixture: ComponentFixture<AccountsFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
