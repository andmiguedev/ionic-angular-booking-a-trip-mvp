import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "pages",
    pathMatch: "full",
  },
  {
    path: "pages",
    loadChildren: "./pages/pages.module#PagesPageModule",
  },
  {
    path: "select-place",
    loadChildren: () =>
      import("./pages/places/select-place/select-place.module").then(
        (m) => m.SelectPlacePageModule
      ),
  },
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome/welcome.module").then((m) => m.WelcomePageModule),
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
