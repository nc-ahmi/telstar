import { Component, OnInit } from '@angular/core';
import {MatExpansionModule, MatExpansionPanelDescription, MatExpansionPanelHeader} from '@angular/material/expansion';

@Component({
  selector: 'app-choose-route',
  templateUrl: './choose-route.component.html',
  styleUrls: ['./choose-route.component.css']
})
export class ChooseRouteComponent implements OnInit {
  panelOpenState = false;

  optimalRoute = {
    title: "Optimal Route",
    startDestination: "Tanger",
    targetDestination: "Darfur",
    shippingDate: '20-12-2020 - 07:15',
    parcelType: 'Livestock',
    travelTime: "12",
    price: 100,
    route: ["Tanger", "Tripoli", 'Omdurman', 'Darfur']
  };

  cheapestRoute = {
    title: "Cheapest Route",
    startDestination: "Tanger",
    targetDestination: "Darfur",
    shippingDate: '01-01-2001 - 12:00',
    parcelType: 'Refrigerated Goods',
    travelTime: "36",
    price: 10,
    route: ["Copenhagen", "Warsaw", 'Aarhus', 'Copenhagen', 'Warsaw', 'Darfur']
  };

  fastestRoute = {
    title: "Fastest Route",
    startDestination: "Copenhagen",
    targetDestination: "Darfur",
    shippingDate: '01-02-2003 - 15:00',
    parcelType: 'Weapons',
    travelTime: "1",
    price: 2000,
    route: ["Tanger", 'Cairo', "Darfur"]
  };

  routes: any[] = [this.optimalRoute, this.fastestRoute, this.cheapestRoute];
  classList: any;
  nextElementSibling: any;

  constructor() {
  }

  ngOnInit(): void {
  }
  
}

