import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private _isAllowedToContinue = false;

  get checkVisitorAuthStatus() {
    return this._isAllowedToContinue;
  }

  continue() {
    this._isAllowedToContinue = true;
  }

  returnBack() {
    this._isAllowedToContinue = false;
  }
}
