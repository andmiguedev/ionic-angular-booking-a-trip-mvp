import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";

import { TourInfo } from "../../models/tour-info.model";
import { DisplayTourSchedule } from "../../data/tour-schedule";

@Component({
  selector: "app-tours",
  templateUrl: "./tours.page.html",
  styleUrls: ["./tours.page.scss"],
})
export class ToursPage implements OnInit {
  myTourSchedule: TourInfo[];
  walkingTour: TourInfo;

  constructor(
    private loadTourSchedule: DisplayTourSchedule,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Return back to My Schedule page if tourId is invalid
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("tourId")) {
        this.navCtrl.navigateBack("/pages/tabs/tours");
        return;
      }

      // Fetch a single Walking Tour by matching its Id
      this.walkingTour = this.loadTourSchedule.getEachWalkingTour(
        paramMap.get("tourId")
      );
    });

    // Store all the Walking Tours that are being displayed
    this.myTourSchedule = this.loadTourSchedule.getTourSchedule;
  }
}
