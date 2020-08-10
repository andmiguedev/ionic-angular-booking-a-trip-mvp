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
    redirectTo: "save-modal",
    pathMatch: "full",
  },
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome/welcome.module").then((m) => m.WelcomePageModule),
  },
  {
    path: "select-place",
    loadChildren: () =>
      import("./pages/places/select-place/select-place.module").then(
        (m) => m.SelectPlacePageModule
      ),
  },
  {
    path: "offer-places",
    loadChildren: () =>
      import("./pages/places/offer-places/offer-places.module").then(
        (m) => m.OfferPlacesPageModule
      ),
  },
  {
    path: "nearby-places",
    loadChildren: () =>
      import("./pages/places/nearby-places/nearby-places.module").then(
        (m) => m.NearbyPlacesPageModule
      ),
  },
  {
    path: "create-trip",
    loadChildren: () =>
      import("./pages/trips/create-trip/create-trip.module").then(
        (m) => m.CreateTripPageModule
      ),
  },
  {
    path: "edit-trip",
    loadChildren: () =>
      import("./pages/trips/edit-trip/edit-trip.module").then(
        (m) => m.EditTripPageModule
      ),
  },
  {
    path: "detail-trip",
    loadChildren: () =>
      import("./pages/trips/detail-trip/detail-trip.module").then(
        (m) => m.DetailTripPageModule
      ),
  },
  {
    path: "user-trips",
    loadChildren: () =>
      import("./pages/trips/user-trips/user-trips.module").then(
        (m) => m.UserTripsPageModule
      ),
  },
  {
    path: "support",
    loadChildren: () =>
      import("./pages/support/support.module").then((m) => m.SupportPageModule),
  },
  {
    path: "share-modal",
    loadChildren: () =>
      import("./pages/modals/share-modal/share-modal.module").then(
        (m) => m.ShareModalPageModule
      ),
  },
  {
    path: "recent-places",
    loadChildren: () =>
      import("./pages/places/recent-places/recent-places.module").then(
        (m) => m.RecentPlacesPageModule
      ),
  },
  {
    path: "success-modal",
    loadChildren: () =>
      import("./pages/modals/success-modal/success-modal.module").then(
        (m) => m.SuccessModalPageModule
      ),
  },
  {
    path: "save-modal",
    loadChildren: () =>
      import("./pages/modals/save-modal/save-modal.module").then(
        (m) => m.SaveModalPageModule
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
