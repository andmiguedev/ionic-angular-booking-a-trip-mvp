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
    redirectTo: "walking-tours",
    pathMatch: "full",
  },
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome/welcome.module").then((m) => m.WelcomePageModule),
  },
  {
    path: "walking-tours",
    loadChildren: () =>
      import("./pages/tours/walking-tours/walking-tours.module").then(
        (m) => m.WalkingToursPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
