import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PagesPage } from "./pages.page";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/pages/tabs/places",
    pathMatch: "full",
  },
  {
    path: "tabs",
    component: PagesPage,
    children: [
      {
        path: "places",
        children: [
          {
            path: "",
            loadChildren: "./places/places.module#PlacesPageModule",
          },
          {
            path: "recent",
            loadChildren:
              "./places/recent-places/recent-places.module#RecentPlacesPageModule",
          },
          {
            path: "local",
            loadChildren:
              "./places/nearby-places/nearby-places.module#NearbyPlacesPageModule",
          },
        ],
      },
      {
        path: "trips",
        children: [
          {
            path: "",
            loadChildren: "./trips/trips.module#TripsPageModule",
          },
          {
            path: "create",
            loadChildren:
              "./trips/create-trip/create-trip.module#CreateTripPageModule",
          },
          {
            path: "edit/:pageId",
            loadChildren:
              "./trips/edit-trip/edit-trip.module#EditTripPageModule",
          },
          {
            path: ":pageId",
            loadChildren:
              "./trips/detail-trip/detail-trip.module#DetailTripPageModule",
          },
        ],
      },
      {
        path: "",
        redirectTo: "/pages/tabs/trips",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
