import { Component, OnInit } from '@angular/core';

import { OnlineProfile } from "./../../../models/online-profile.model";
import { DisplayVisitorProfiles } from "src/app/data/visitor-profiles";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  showVisitorProfile: OnlineProfile[];

  constructor(private renderLocalData: DisplayVisitorProfiles) { }

  ngOnInit() {
    this.showVisitorProfile = this.renderLocalData.getVisitorProfile;
  }

}
