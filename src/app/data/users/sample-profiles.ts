import { Injectable } from "@angular/core";
import { OnlineProfile } from "../../models/users/OnlineProfile.model";

@Injectable({
  providedIn: "root",
})
export class OnlineProfiles {
  private _onlineProfile: OnlineProfile[] = [
    new OnlineProfile(
      "77dc5fc8c9134f68203c89959d656ea5",
      "Berardo",
      "Toscani",
      "berardo_toscani@mail.com",
      "August 15, 1987",
      "Male",
      "USA",
      6,
      14
    ),
  ];

  get getOnlineProfile() {
    return [...this._onlineProfile];
  }
}
