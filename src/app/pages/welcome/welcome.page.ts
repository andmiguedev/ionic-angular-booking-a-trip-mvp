import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/auth/authentication.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
})
export class WelcomePage implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  onRedirectToPages() {
    this.authService.continue();

    setTimeout(() => {
      this.router.navigateByUrl("/pages/tabs/places/search");
    }, 1000);
  }
}
