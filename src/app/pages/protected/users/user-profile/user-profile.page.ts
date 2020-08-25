import { Component, OnInit } from "@angular/core";

import { OnlineProfile } from "../../../../models/users/OnlineProfile.model";
import { OnlineProfiles } from "../../../../data/users/sample-profiles";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.page.html",
  styleUrls: ["./user-profile.page.scss"],
})
export class UserProfilePage implements OnInit {
  onlineProfile: OnlineProfile[];

  constructor(private renderLocalData: OnlineProfiles) {}

  ngOnInit() {
    this.onlineProfile = this.renderLocalData.getOnlineProfile;
  }
}
