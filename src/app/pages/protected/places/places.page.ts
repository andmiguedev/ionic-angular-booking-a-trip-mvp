import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { PopularPlace } from "../../../models/places/PopularPlace.model";
import { MuseumPlace } from "../../../models/places/MuseumPlace.model";
import { ChurchPlace } from "../../../models/places/ChurchPlace.model";

import { PopularPlaces } from "../../../data/places/sample-popular";
import { MuseumPlaces } from "../../../data/places/sample-museums";
import { ChurchPlaces } from "../../../data/places/sample-churches";

import { SuccessModalComponent } from "../../../components/modals/success-modal/success-modal.component";

@Component({
  selector: "app-places",
  templateUrl: "./places.page.html",
  styleUrls: ["./places.page.scss"],
})
export class PlacesPage implements OnInit {
  popularPlaces: PopularPlace[];
  museumPlaces: MuseumPlace[];
  churchPlaces: ChurchPlace[];

  constructor(
    private loadPopularPlaces: PopularPlaces,
    private loadMuseumPlaces: MuseumPlaces,
    private loadChurchPlaces: ChurchPlaces,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.popularPlaces = this.loadPopularPlaces.getPopularPlaces;
    this.museumPlaces = this.loadMuseumPlaces.getMuseumPlaces;
    this.churchPlaces = this.loadChurchPlaces.getChurchPlaces;
  }

  onOpenModal() {
    this.modalCtrl
      .create({
        component: SuccessModalComponent,
        animated: true,
      })
      .then((modalElement) => {
        modalElement.present();
      });
  }
}
