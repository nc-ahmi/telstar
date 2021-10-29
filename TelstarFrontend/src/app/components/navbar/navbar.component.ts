import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sendParcel: any;
  myPage: any;
  logoutVar: any;
  constructor() { }

  ngOnInit(): void {
    this.sendParcel = false;
    this.myPage = false;
    this.logoutVar = false;
  }
}
