import { RenderLocalInfoService } from "src/app/services/render-local-info.service";
import { VisitorPlace } from "./../../../models/visitor-place.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recent-places",
  templateUrl: "./recent-places.page.html",
  styleUrls: ["./recent-places.page.scss"],
})
export class RecentPlacesPage implements OnInit {
  showHistoricPlaces: VisitorPlace[];

  constructor(private displayLocalPlaces: RenderLocalInfoService) {}

  ngOnInit() {
    this.showHistoricPlaces = this.displayLocalPlaces.touristicPlaces;
  }
}
