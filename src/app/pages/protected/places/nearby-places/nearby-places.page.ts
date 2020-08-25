import { Component, OnInit } from "@angular/core";

import { NearbyPlace } from "../../../../models/places/NearbyPlace.model";
import { NearbyPlaces } from "../../../../data/places/nearby-places";

@Component({
  selector: "app-nearby-places",
  templateUrl: "./nearby-places.page.html",
  styleUrls: ["./nearby-places.page.scss"],
})
export class NearbyPlacesPage implements OnInit {
  nearbyPlaces: NearbyPlace[];

  constructor(private displayLocalData: NearbyPlaces) {}

  ngOnInit() {
    this.nearbyPlaces = this.displayLocalData.getNearbyPlaces;
  }
}
