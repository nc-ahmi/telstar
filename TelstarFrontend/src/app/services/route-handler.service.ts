import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteHandlerService {
  items!: [];

  constructor() { }

  getRoutes() {
    return this.items;
  }

  setRoute(something: any): void {
    this.items = something;
  }

  clearRoute() {
    this.items = [];
    return this.items;
  }
}

