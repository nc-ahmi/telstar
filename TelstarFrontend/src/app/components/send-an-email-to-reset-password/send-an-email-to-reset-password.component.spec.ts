import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAnEmailToResetPasswordComponent } from './send-an-email-to-reset-password.component';

describe('SendAnEmailToResetPasswordComponent', () => {
  let component: SendAnEmailToResetPasswordComponent;
  let fixture: ComponentFixture<SendAnEmailToResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendAnEmailToResetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendAnEmailToResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
