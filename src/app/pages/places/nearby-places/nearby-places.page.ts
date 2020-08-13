import { Component, OnInit } from "@angular/core";

import { StopPlace } from "../../../models/stop-place.model";
import { DisplayNearbyPlaces } from "src/app/data/nearby-places";

@Component({
  selector: "app-nearby-places",
  templateUrl: "./nearby-places.page.html",
  styleUrls: ["./nearby-places.page.scss"],
})
export class NearbyPlacesPage implements OnInit {
  showLocalPlaces: StopPlace[];

  constructor(private renderLocalData: DisplayNearbyPlaces) {}

  ngOnInit() {
    this.showLocalPlaces = this.renderLocalData.getNearbyPlaces;
  }
}
