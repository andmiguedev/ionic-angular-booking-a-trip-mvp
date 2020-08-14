import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: "root",
})
export class AuthenticationGuard implements CanLoad {
  /**
   * Prevents Visitor user from accessing route pages that
   * are protected
   * @param authService boolean of proceed or deny
   * @param router navigates to root page
   */
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  /**
   * Guard that runs before Lazy loading is fetch
   * @param route any route page that requires auth
   * @param segments specific path that is verified
   */
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.checkVisitorAuthStatus) {
      this.router.navigateByUrl("/welcome");
    }

    return this.authService.checkVisitorAuthStatus;
  }
}
