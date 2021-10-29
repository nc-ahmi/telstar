import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new FormGroup({
    email: new FormControl('', Validators.maxLength(4000)),
    firstName: new FormControl('', Validators.maxLength(4000)),
    lastName: new FormControl('', Validators.maxLength(4000)),
    password: new FormControl('', Validators.maxLength(4000)),
    repeatPassword: new FormControl('', Validators.maxLength(4000)),
  });
  constructor() { }

  ngOnInit(): void {
  }

  openRegister() {

  }
}
