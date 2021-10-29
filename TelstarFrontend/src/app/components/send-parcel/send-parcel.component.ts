import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-send-parcel',
  templateUrl: './send-parcel.component.html',
  styleUrls: ['./send-parcel.component.css']
})
export class SendParcelComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Addis Abeba', 'Bahrel Ghazal', 'Cairo', 'Congo', 'Dakar', 'Darfur', 'Dragebjerget', 'Guld-Kysten', 'Hvalbugten', 'Kabalo', 'Kap Guardafui', 'Kapstaden', 'Luanda', 'Marakesh', 'Mocambique', 'Omdurman', 'Sahara', 'Sierra Leone', 'Slave-Kysten', 'Suakin', 'Tanger', 'Timbuktu', 'Tripoli', 'Tunis', 'Victoria-Faldene', 'Victoria-Søen', 'Wadai', 'Zanzibar'];
  types: string[] = ['Standard', 'Cautious Parcel', 'Livestock', 'Refrigerated', 'Weapons'];
  checkbox: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // Add time to the date and remove time from the form
    let dateTime: Date = new Date(form.value.startDate + 'T' + form.value.startTime);
    form.value.startDate = dateTime;
    delete form.value.time;

    //Send to backend
    //Magic

    //Receive three routes and send data to new component
    const optimalRoute = {
      startDestination: "Tanger",
      targetDestination: "Darfur",
      shippingDate: form.value.startDate,
      parcelType: form.value.parcelType,
      travelTime: "12:00",
      price: 100,
      route: ["Tanger", "Tripoli", 'Omdurman', 'Darfur']
    };

    const cheapestRoute = {
      startDestination: "Tanger",
      targetDestination: "Darfur",
      shippingDate: form.value.startDate,
      parcelType: form.value.parcelType,
      travelTime: "36:00",
      price: 10,
      route: ["Copenhagen", "Warzaw", 'Aarhus', 'Copenhagen', 'Warsaw', 'Darfur']
    };

    const fastestRoute = {
      startDestination: "Tanger",
      targetDestination: "Darfur",
      shippingDate: form.value.startDate,
      parcelType: form.value.parcelType,
      travelTime: "1:00",
      price: 2000,
      route: ["Tanger", 'Cairo', "Darfur"]
    };

    let routes = [
      fastestRoute,
      optimalRoute,
      cheapestRoute
    ]

    this.router.navigate(['/choose-route']);

  }
}
