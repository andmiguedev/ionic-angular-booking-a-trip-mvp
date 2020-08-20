import { Component, OnInit } from "@angular/core";

import { TourInfo } from "../../../models/tour-info.model";

import { DisplayTourSchedule } from "../../../data/tour-schedule";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-walking-tours",
  templateUrl: "./walking-tours.page.html",
  styleUrls: ["./walking-tours.page.scss"],
})
export class WalkingToursPage implements OnInit {
  myTourSchedule: TourInfo[];
  walkingTour: TourInfo;

  constructor(
    private showTourSchedule: DisplayTourSchedule,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Return back to My Schedule page if tourId is invalid
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("tourId")) {
        this.navCtrl.navigateBack("/pages/tabs/tours/waking-tours");
        return;
      }

      // Fetch a single Walking Tour by matching its Id
      this.walkingTour = this.showTourSchedule.getEachWalkingTour(
        paramMap.get("tourId")
      );
    });

    // Store all the Walking Tours that are being displayed
    this.myTourSchedule = this.showTourSchedule.getTourSchedule;
  }
}
