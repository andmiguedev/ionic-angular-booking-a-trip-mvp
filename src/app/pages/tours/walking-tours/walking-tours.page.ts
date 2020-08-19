import { Component, OnInit } from "@angular/core";

import { TourInfo } from "../../../models/tour-info.model";

import { DisplayTourSchedule } from "../../../data/tour-schedule";

@Component({
  selector: "app-walking-tours",
  templateUrl: "./walking-tours.page.html",
  styleUrls: ["./walking-tours.page.scss"],
})
export class WalkingToursPage implements OnInit {
  myTourSchedule: TourInfo[];
  constructor(private showTourSchedule: DisplayTourSchedule) {}

  ngOnInit() {
    this.myTourSchedule = this.showTourSchedule.getTourSchedule;
  }
}
