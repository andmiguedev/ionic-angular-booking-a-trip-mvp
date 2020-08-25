import { Injectable } from "@angular/core";

import { ChurchPlace } from "../../models/places/ChurchPlace.model";

@Injectable({
  providedIn: "root",
})
export class ChurchPlaces {
  private _churchPlaces: ChurchPlace[] = [
    new ChurchPlace(
      "c7f829d2fb4bdf8ac2a3d20ab1d46870",
      "https://www.touropia.com/gfx/d/tourist-attractions-in-rome/st_peters_basilica.jpg",
      "St. Peter’s Basilica",
      "It may not be the oldest Catholic church in Rome, but St. Peter’s Basilica is definitely the most famous",
      4.7,
      3.2
    ),
    new ChurchPlace(
      "d142a5cc06de01c90601d50c1b95c126",
      "https://www.touropia.com/gfx/d/churches-in-rome/basilica_di_santa_maria_maggiore.jpg",
      "Basilica di Santa Maria",
      "It is considered one of the most important Catholic churches in Rome, which is to say, a crown jewel",
      4.3,
      2.7
    ),
    new ChurchPlace(
      "c7f5d07d551da1c11b22e859f165e753",
      "https://www.touropia.com/gfx/d/churches-in-rome/san_giovanni_in_laterano.jpg",
      "San Giovanni in Laterano",
      "It is one of four major basilicas in Rome. Dedicated to John the Baptist and John the Evangelist",
      4.5,
      2.4
    ),
    new ChurchPlace(
      "bace79b26766c5b3091bc7bc3ed36484",
      "https://www.touropia.com/gfx/d/churches-in-rome/basilica_of_san_clemente.jpg",
      "Basilica of San Clemente",
      "It is named after St. Clement, who was the third pope after St. Peter. Located just a few blocks from the Coliseum",
      4.3,
      2.5
    ),
  ];

  get getChurchPlaces() {
    return [...this._churchPlaces];
  }
}
