import { StopPlace } from "../../models/stop-place.model";
import { RenderLocalInfoService } from "../../services/render-local-info.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nearby-places",
  templateUrl: "./nearby-places.page.html",
  styleUrls: ["./nearby-places.page.scss"],
})
export class NearbyPlacesPage implements OnInit {
  showLocalPlaces: StopPlace[];

  constructor(private displayLocalPlaces: RenderLocalInfoService) {}

  ngOnInit() {
    this.showLocalPlaces = this.displayLocalPlaces.nearbyPlaces;
  }
}
