import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "nearby-places",
    pathMatch: "full",
  },
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome/welcome.module").then((m) => m.WelcomePageModule),
  },
  {
    path: "find-places",
    loadChildren: () =>
      import("./pages/find-places/find-places.module").then(
        (m) => m.FindPlacesPageModule
      ),
  },
  {
    path: "offer-places",
    loadChildren: () =>
      import("./pages/offer-places/offer-places.module").then(
        (m) => m.OfferPlacesPageModule
      ),
  },
  {
    path: "nearby-places",
    loadChildren: () =>
      import("./pages/nearby-places/nearby-places.module").then(
        (m) => m.NearbyPlacesPageModule
      ),
  },
  {
    path: "create-trip",
    loadChildren: () =>
      import("./pages/create-trip/create-trip.module").then(
        (m) => m.CreateTripPageModule
      ),
  },
  {
    path: "edit-trip",
    loadChildren: () =>
      import("./pages/edit-trip/edit-trip.module").then(
        (m) => m.EditTripPageModule
      ),
  },
  {
    path: "detail-trip",
    loadChildren: () =>
      import("./pages/detail-trip/detail-trip.module").then(
        (m) => m.DetailTripPageModule
      ),
  },
  {
    path: "recent-places",
    loadChildren: () =>
      import("./pages/recent-places/recent-places.module").then(
        (m) => m.RecentPlacesPageModule
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
