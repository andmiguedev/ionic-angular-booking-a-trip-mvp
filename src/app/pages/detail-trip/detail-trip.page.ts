import { Component, OnInit } from "@angular/core";
import { RenderLocalInfoService } from "src/app/services/render-local-info.service";
import { VisitorPlace } from "src/app/models/visitor-place.model";

@Component({
  selector: "app-detail-trip",
  templateUrl: "./detail-trip.page.html",
  styleUrls: ["./detail-trip.page.scss"],
})
export class DetailTripPage implements OnInit {
  showImportantPlaces: VisitorPlace[];

  constructor(private displayLocalPlaces: RenderLocalInfoService) {}

  ngOnInit() {
    this.showImportantPlaces = this.displayLocalPlaces.touristicPlaces;
  }
}
