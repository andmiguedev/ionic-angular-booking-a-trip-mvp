import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthenticationGuard } from "./services/auth/authentication.guard";

const routes: Routes = [
  {
    path: "pages",
    loadChildren: "./pages/pages.module#PagesPageModule",
    canLoad: [AuthenticationGuard],
  },
  {
    path: "",
    redirectTo: "welcome",
    pathMatch: "full",
  },
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome/welcome.module").then((m) => m.WelcomePageModule),
  },
  {
    path: "pages/users/user-profile",
    loadChildren: () =>
      import("./pages/users/user-profile/user-profile.module").then(
        (m) => m.UserProfilePageModule
      ),
  },
  {
    path: "about-us",
    loadChildren: () =>
      import("./pages/about-us/about-us.module").then(
        (m) => m.AboutUsPageModule
      ),
  },
  {
    path: "support",
    loadChildren: () =>
      import("./pages/support/support.module").then((m) => m.SupportPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
