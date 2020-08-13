import { Injectable } from "@angular/core";

import { MuseumPlace } from "./../models/museum-place.model";

@Injectable({
  providedIn: "root",
})
export class DisplayMuseumPlaces {
  private _museumPlaces: MuseumPlace[] = [
    new MuseumPlace(
      "eb7ede050b8e5dce3b507277aa9f1796",
      "https://www.touropia.com/gfx/d/museums-in-rome/galleria_borghese.jpg",
      "Galleria Borghese",
      "The most impressive art collection in the city of Rome is housed within the Villa Borghese in the Campo Marzio district.",
      4.7,
      2.8
    ),
    new MuseumPlace(
      "9cd42ea6b06d67e30ee2837bd5b13778",
      "https://www.touropia.com/gfx/d/museums-in-rome/capitoline_museums.jpg",
      "Capitoline Museum",
      "The Museo Capitolino is housed in a 17th century structure based on a sketch by Michelangelo, and it is home to works.",
      4.2,
      1.9
    ),
    new MuseumPlace(
      "d775f95a6cac8266d7ee80115a818b65",
      "https://www.touropia.com/gfx/d/museums-in-rome/palazzo_doria_pamphilj.jpg",
      "Palazzo Doria Pamphilj",
      "It is a privately owned palace in Rome that dates back to the 15th century, and is the perfect way to get a glimpse",
      4.6,
      2.3
    ),
    new MuseumPlace(
      "1a5bbd3679820b9bdf729ed0bcd57218",
      "https://www.touropia.com/gfx/d/famous-mausoleums-in-the-world/castel_santangelo.jpg?",
      "Castel Sant'Angelo",
      "One museum in Rome you won’t want to miss is the Castel Sant’Angelo, parts of which are nearly 1,900 years old.",
      4.4,
      2.5
    ),
  ];

  get getMuseumPlaces() {
    return [...this._museumPlaces];
  }
}
