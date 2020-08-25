import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { NavController, IonItemSliding } from "@ionic/angular";

import { TourSchedule } from "../../../models/tours/TourSchedule.model";
import { TourSchedules } from "../../../data/tours/sample-schedules";

@Component({
  selector: "app-tours",
  templateUrl: "./tours.page.html",
  styleUrls: ["./tours.page.scss"],
})
export class ToursPage implements OnInit {
  myTourSchedule: TourSchedule[];
  walkingTour: TourSchedule;

  constructor(
    private loadTourSchedule: TourSchedules,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router
  ) {}

  ngOnInit() {
    // Return back to My Schedule page if tourId is invalid
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("tourId")) {
        this.navCtrl.navigateBack("/protected/mobile/tours");
        return;
      }

      // Fetch a single Walking Tour by matching its Id
      this.walkingTour = this.loadTourSchedule.getEachWalkingTour(
        paramMap.get("tourId")
      );
    });

    // Store all the Walking Tours that are being displayed
    this.myTourSchedule = this.loadTourSchedule.getTourSchedules;
  }

  // Changes general info of each Walking tour
  onEditTour(tourId: string, walkingTour: IonItemSliding) {
    walkingTour.close();

    this.router.navigate(["/", "protected", "mobile", "tours", "edit", tourId]);
    console.log("Walking tour ID: ", tourId);
  }

  onStartTour() {
    this.router.navigateByUrl("/protected/mobile/places/nearby");
  }
}
