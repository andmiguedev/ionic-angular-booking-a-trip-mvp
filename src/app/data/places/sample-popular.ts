import { Injectable } from "@angular/core";
import { PopularPlace } from "../../models/places/PopularPlace.model";

@Injectable({
  providedIn: "root",
})
export class PopularPlaces {
  private _popularPlaces: PopularPlace[] = [
    new PopularPlace(
      "e01877caa5a2cba4bd2bfbd28e7d75f1",
      "https://www.touropia.com/gfx/d/roman-amphitheaters/colosseum.jpg",
      "Roman Colosseum",
      "This ancient theather is another of Rome’s major tourist attractions.",
      4.9,
      3.2
    ),
    new PopularPlace(
      "24576e3620dcc3fbe27def945b966b9b",
      "https://www.touropia.com/gfx/d/ancient-roman-temples/pantheon.jpg",
      "The Pantheon",
      "The temple has served as a Roman Catholic Church since the 7th century.",
      4.5,
      2.7
    ),
    new PopularPlace(
      "04d5312a64cb2790c13d96172f098079",
      "https://www.touropia.com/gfx/d/city-squares-around-the-world/saint_peters_square.jpg",
      "Saint Peter's Square",
      "The center of the Catholic world and a major tourist attraction.",
      4.3,
      2.1
    ),
    new PopularPlace(
      "04d5312a64cb2790c13d96172f098079",
      "https://www.touropia.com/gfx/d/tourist-attractions-in-rome/trevi_fountain.jpg",
      "Trevi Fountain",
      "The location of the Trevi fountain marks the terminus of the ancient Aqua Virgo aqueduct.",
      4.7,
      2.9
    ),
  ];

  get getPopularPlaces() {
    return [...this._popularPlaces];
  }
}
