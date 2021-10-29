import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-an-email-to-reset-password',
  templateUrl: './send-an-email-to-reset-password.component.html',
  styleUrls: ['./send-an-email-to-reset-password.component.css']
})
export class SendAnEmailToResetPasswordComponent implements OnInit {
  reset = new FormGroup({
    email: new FormControl('', Validators.maxLength(4000)),
  });
  constructor() { }

  ngOnInit() {

  }
}
