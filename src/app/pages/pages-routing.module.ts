import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PagesPage } from "./pages.page";

const routes: Routes = [
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
          {
            path: "search",
            loadChildren:
              "./places/search-place/search-place.module#SearchPlacePageModule",
          },
        ],
      },
      {
        path: "tours",
        children: [
          {
            path: "",
            loadChildren: "./tours/tours.module#ToursPageModule",
          },
          {
            path: "walking-tours",
            loadChildren:
              "./tours/walking-tours/walking-tours.module#WalkingToursPageModule",
          },
        ],
      },
      {
        path: "users",
        children: [
          {
            path: "profile",
            loadChildren:
              "./users/user-profile/user-profile.module#UserProfilePageModule",
          },
          // {
          //   path: "edit/:pageId",
          //   loadChildren:
          //     "./trips/edit-trip/edit-trip.module#EditTripPageModule",
          // },
          // {
          //   path: ":pageId",
          //   loadChildren:
          //     "./trips/detail-trip/detail-trip.module#DetailTripPageModule",
          // },
        ],
      },
      {
        path: "",
        redirectTo: "/pages/tabs/users",
        pathMatch: "full",
      },
      {
        path: "landing",
        children: [
          {
            path: "about",
            loadChildren:
              "./landing/about-us/about-us.module#AboutUsPageModule",
          },
          {
            path: "support",
            loadChildren: "./landing/support/support.module#SupportPageModule",
          },
        ],
      },
      {
        path: "",
        redirectTo: "/pages/tabs/landing",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/pages/tabs/places",
    pathMatch: "full",
  },
  {
    path: "",
    redirectTo: "/pages/tabs/tours",
    pathMatch: "full",
  },
  {
    path: "search-place",
    loadChildren: () =>
      import("./places/search-place/search-place.module").then(
        (m) => m.SearchPlacePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
