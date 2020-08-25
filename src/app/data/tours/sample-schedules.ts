import { Injectable } from "@angular/core";

import { TourSchedule } from "../../models/tours/TourSchedule.model";

@Injectable({
  providedIn: "root",
})
export class TourSchedules {
  private _tourSchedules: TourSchedule[] = [
    new TourSchedule(
      "e01877caa5a2cba4bd2bfbd28e7d75f1",
      "https://www.touropia.com/gfx/d/roman-amphitheaters/colosseum.jpg",
      "Roman Colosseum",
      "Nov 22, 2019",
      "9:15 am",
      4
    ),
    new TourSchedule(
      "eb7ede050b8e5dce3b507277aa9f1796",
      "https://www.touropia.com/gfx/d/museums-in-rome/galleria_borghese.jpg",
      "Galleria Borghese",
      "Nov 24, 2019",
      "3:15 pm",
      4
    ),
    new TourSchedule(
      "22b7db690efd1aa2af698fc723e6a09c",
      "https://www.touropia.com/gfx/d/tourist-attractions-in-rome/piazza_del_popolo.jpg",
      "Piazza Del Popolo",
      "Nov 18, 2019",
      "11:37 am",
      4
    ),
    new TourSchedule(
      "c7f829d2fb4bdf8ac2a3d20ab1d46870",
      "https://www.touropia.com/gfx/d/tourist-attractions-in-rome/st_peters_basilica.jpg",
      "St Peter Basilica",
      "Nov 26, 2019",
      "4:50 pm",
      4
    ),
  ];

  get getTourSchedules() {
    return [...this._tourSchedules];
  }

  getEachWalkingTour(id: string) {
    return { ...this._tourSchedules.find((p) => p.id === id) };
  }
}
