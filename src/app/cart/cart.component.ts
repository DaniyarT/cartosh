import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  latitude = 43.215569;
  longitude = 77.000020;
  locationChosen = true;

  constructor() { }

  ngOnInit() {
  }

 /* clickedLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }                                 dragable marker*/ 

}
