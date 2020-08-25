import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LoadingController } from "@ionic/angular";

import { AuthorizationService } from "../../services/authorization/authorization.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
})
export class WelcomePage implements OnInit {
  isSpinnerLoading = false;

  constructor(
    private authService: AuthorizationService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  onNavigateToSignup() {
    // this.authService.continue();
    this.router.navigateByUrl("/signup");
  }

  onRedirectToPages() {
    this.isSpinnerLoading = true;
    this.authService.continue();

    // Displays an overlay with the ion spinner
    // props after the User clicks the button
    this.loadingCtrl
      .create({
        keyboardClose: true,
        message: "Logging in...",
      })
      .then((loadingSpinner) => {
        loadingSpinner.present();

        // Spinner would finish loading after
        // all pages are loaded
        setTimeout(() => {
          this.isSpinnerLoading = false;
          loadingSpinner.dismiss();

          this.router.navigateByUrl("/protected/mobile/places/search");
        }, 1500);
      });
  }
}
