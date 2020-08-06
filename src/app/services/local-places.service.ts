import { Injectable } from "@angular/core";
import { TripPlace } from "../models/trip-places.model";

@Injectable({
  providedIn: "root",
})
export class LocalPlacesService {
  // tslint:disable-next-line: variable-name
  private _visitedPlaces: TripPlace[] = [
    new TripPlace(
      "5e4bcc1c347b477cc3ee1c7bf174157b",
      "Basilica of San Clemente",
      "Via Labicana 95, Roma, RM 00184",
      4.5,
      "https://www.touropia.com/gfx/d/churches-in-rome/basilica_of_san_clemente.jpg"
    ),
    new TripPlace(
      "4ae4899874b37e8596a31884d222b58e",
      "San Giovanni In Literano",
      "Piazza San Giovanni in Laterano RM 400184",
      4.0,
      "https://www.touropia.com/gfx/d/churches-in-rome/san_giovanni_in_laterano.jpg"
    ),
    new TripPlace(
      "3195208ebde0c0ac5ee331af5802ac4c",
      "Palatine Hill",
      "Piazza Santa Maria Nova, 53, Roma, IT 00186",
      3.8,
      "https://www.touropia.com/gfx/d/tourist-attractions-in-rome/palatine_hill.jpg"
    ),
  ];

  get mostVisitedPlaces() {
    return [...this._visitedPlaces];
  }

  constructor() {}
}
