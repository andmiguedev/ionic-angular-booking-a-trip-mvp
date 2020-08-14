import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private _isAllowedToContinue = false;

  get checkVisitorAuthStatus() {
    return this._isAllowedToContinue;
  }

  proceed() {
    this._isAllowedToContinue = true;
  }

  deny() {
    this._isAllowedToContinue = false;
  }
}
