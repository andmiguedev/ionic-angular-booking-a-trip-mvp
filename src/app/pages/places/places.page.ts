import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { HistoricPlace } from "./../../models/historic-place.model";
import { MuseumPlace } from "./../../models/museum-place.model";
import { ChurchPlace } from "./../../models/church-place.model";

import { DisplayTouristicPlaces } from "../../data/touristic-places";
import { DisplayMuseumPlaces } from "../../data/museum-places";
import { DisplayChurchPlaces } from "../../data/church-places";

import { SuccessModalComponent } from "../../components/modals/success-modal/success-modal.component";

@Component({
  selector: "app-places",
  templateUrl: "./places.page.html",
  styleUrls: ["./places.page.scss"],
})
export class PlacesPage implements OnInit {
  historicPlaces: HistoricPlace[];
  museumPlaces: MuseumPlace[];
  churchPlaces: ChurchPlace[];

  constructor(
    private loadHistoricPlaces: DisplayTouristicPlaces,
    private loadMuseumPlaces: DisplayMuseumPlaces,
    private loadChurchPlaces: DisplayChurchPlaces,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.historicPlaces = this.loadHistoricPlaces.getTouristicPlaces;
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
