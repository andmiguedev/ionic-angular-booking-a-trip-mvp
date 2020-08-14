import { Component, OnInit } from "@angular/core";
// import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/auth/authentication.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
})
export class WelcomePage implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

  onRedirectToPages() {
    this.authService.proceed();
  }
}
