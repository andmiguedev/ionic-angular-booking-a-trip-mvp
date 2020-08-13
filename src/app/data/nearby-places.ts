import { Injectable } from "@angular/core";
import { StopPlace } from "../models/stop-place.model";

@Injectable({
  providedIn: "root",
})
export class DisplayNearbyPlaces {
  private _stopByPlaces: StopPlace[] = [
    new StopPlace(
      "5e4bcc1c347b477cc3ee1c7bf174157b",
      "https://www.touropia.com/gfx/d/churches-in-rome/basilica_of_san_clemente.jpg",
      "Basilica of San Clemente",
      "Via Labicana 95, Roma, RM 00184"
    ),
    new StopPlace(
      "4ae4899874b37e8596a31884d222b58e",
      "https://www.touropia.com/gfx/d/churches-in-rome/san_giovanni_in_laterano.jpg",
      "San Giovanni In Literano",
      "Piazza San Giovanni in Laterano RM 400184"
    ),
    new StopPlace(
      "3195208ebde0c0ac5ee331af5802ac4c",
      "https://www.touropia.com/gfx/d/tourist-attractions-in-rome/palatine_hill.jpg",
      "Palatine Hill",
      "Piazza Santa Maria Nova, 53, Roma, IT 00186"
    ),
  ];

  get getNearbyPlaces() {
    return [...this._stopByPlaces];
  }
}
