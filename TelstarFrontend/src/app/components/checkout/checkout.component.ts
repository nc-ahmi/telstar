import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  panelOpenState = false;

  route = {
    title: "Optimal Route",
    startDestination: "Tanger",
    targetDestination: "Darfur",
    shippingDate: '20-12-2020 - 07:15',
    parcelType: 'Livestock',
    travelTime: "12",
    price: 100,
    signed: true,
    fee: true,
    route: ["Tanger", "Tripoli", 'Omdurman', 'Darfur']
  };
  constructor() { }

  ngOnInit(): void {
  }

}
