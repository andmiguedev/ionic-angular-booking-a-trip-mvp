import { TripPlace } from "../../models/trip-places.model";
import { LocalPlacesService } from "../../services/local-places.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nearby-places",
  templateUrl: "./nearby-places.page.html",
  styleUrls: ["./nearby-places.page.scss"],
})
export class NearbyPlacesPage implements OnInit {
  showLocalPlaces: TripPlace[];

  constructor(private displayLocalPlaces: LocalPlacesService) {}

  /**
   * This outputs local trip places from the provided service
   */
  ngOnInit() {
    this.showLocalPlaces = this.displayLocalPlaces.mostVisitedPlaces;
  }
}
