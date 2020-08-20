import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { NavController, IonItemSliding } from "@ionic/angular";

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
    private navCtrl: NavController,
    private router: Router
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

  // Changes general info of each Walking tour
  onEditTour(tourId: string, walkingTour: IonItemSliding) {
    walkingTour.close();

    this.router.navigate(["/", "pages", "tabs", "tours", "edit", tourId]);
    console.log("Walking tour ID: ", tourId);
  }

  onStartTour() {
    this.router.navigateByUrl("/pages/tabs/places/nearby");
  }
}
