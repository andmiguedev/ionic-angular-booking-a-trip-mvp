import { Injectable } from "@angular/core";
import { OnlineProfile } from "./../models/online-profile.model";

@Injectable({
   providedIn: "root",
 })

 export class DisplayVisitorProfiles {
   private _visitorProfile: OnlineProfile[] = [
      new OnlineProfile(
        "77dc5fc8c9134f68203c89959d656ea5",
        "Berardo",
        "Toscani",
        "berardo_toscani@mail.com",
        "August 15, 1987",
        "Male",
        "USA",
        6,
        14,
      ),
   ];

   get getVisitorProfile() {
      return [...this._visitorProfile];
    }
 }