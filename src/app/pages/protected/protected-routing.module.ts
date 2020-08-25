import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProtectedPage } from "./protected.page";

const routes: Routes = [
  {
    path: "mobile",
    component: ProtectedPage,
    children: [
      {
        path: "places",
        children: [
          {
            path: "",
            loadChildren: "./places/places.module#PlacesPageModule",
          },
          // {
          //   path: "recent",
          //   loadChildren:
          //     "./places/recent-places/recent-places.module#RecentPlacesPageModule",
          // },
          {
            path: "nearby",
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
          // {
          //   path: "walking-tours",
          //   loadChildren:
          //     "./tours/walking-tours/walking-tours.module#WalkingToursPageModule",
          // },
          {
            path: "edit/:tourId",
            loadChildren:
              "./tours/edit-tour/edit-tour.module#EditTourPageModule",
          },
        ],
      },
      {
        path: "users",
        children: [
          {
            path: "",
            loadChildren: "./users/users.module#UsersPageModule",
          },
          // {
          //   path: "signup",
          //   loadChildren:
          //     "./users/user-signup/user-signup.module#UserSignupPageModule",
          // },
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
        redirectTo: "/pages/protected/mobile/users",
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
        redirectTo: "/pages/protected/mobile/landing",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/pages/protected/mobile/places",
    pathMatch: "full",
  },
  {
    path: "",
    redirectTo: "/pages/protected/mobile/tours",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
