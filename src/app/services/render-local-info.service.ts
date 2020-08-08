import { Injectable } from "@angular/core";

import { VisitorPlace } from "../models/visitor-place.model";
import { StopPlace } from "../models/stop-place.model";

@Injectable({
  providedIn: "root",
})
export class RenderLocalInfoService {
  private _touristicPlaces: VisitorPlace[] = [
    new VisitorPlace(
      "e01877caa5a2cba4bd2bfbd28e7d75f1",
      "The Colosseum",
      "This ancient theather is another of Rome’s major tourist attractions."
    ),
    new VisitorPlace(
      "24576e3620dcc3fbe27def945b966b9b",
      "The Pantheon",
      "The temple has served as a Roman Catholic Church since the 7th century."
    ),
    new VisitorPlace(
      "04d5312a64cb2790c13d96172f098079",
      "St Peter Basilica",
      "The center of the Catholic world and a major tourist attraction."
    ),
  ];

  // tslint:disable-next-line: variable-name
  private _stopByPlaces: StopPlace[] = [
    new StopPlace(
      "5e4bcc1c347b477cc3ee1c7bf174157b",
      "Basilica of San Clemente",
      "Via Labicana 95, Roma, RM 00184",
      4.5,
      "https://www.touropia.com/gfx/d/churches-in-rome/basilica_of_san_clemente.jpg"
    ),
    new StopPlace(
      "4ae4899874b37e8596a31884d222b58e",
      "San Giovanni In Literano",
      "Piazza San Giovanni in Laterano RM 400184",
      4.0,
      "https://www.touropia.com/gfx/d/churches-in-rome/san_giovanni_in_laterano.jpg"
    ),
    new StopPlace(
      "3195208ebde0c0ac5ee331af5802ac4c",
      "Palatine Hill",
      "Piazza Santa Maria Nova, 53, Roma, IT 00186",
      3.8,
      "https://www.touropia.com/gfx/d/tourist-attractions-in-rome/palatine_hill.jpg"
    ),
  ];

  get touristicPlaces() {
    return [...this._touristicPlaces];
  }

  get nearbyPlaces() {
    return [...this._stopByPlaces];
  }

  constructor() {}
}
