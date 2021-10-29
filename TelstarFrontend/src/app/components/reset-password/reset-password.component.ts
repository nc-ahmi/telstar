import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  reset = new FormGroup({
    password: new FormControl('', Validators.maxLength(4000)),
    repeatPassword: new FormControl('', Validators.maxLength(4000)),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
