import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../core/auth-service.component";

@Component({
  selector: "app-signin-redirect-callback",
  templateUrl: "./signin-redirect-callback.component.html",
  styleUrls: ["./signin-redirect-callback.component.css"],
})
export class SigninRedirectCallbackComponent implements OnInit {
  constructor(private _authService: AuthService, private _router: Router) {}

  async ngOnInit() {
    await this._authService.completeLogin();
    this._router.navigate(["/"], { replaceUrl: true });
  }
}
