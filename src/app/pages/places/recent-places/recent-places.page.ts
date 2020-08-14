import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { HistoricPlace } from "./../../../models/historic-place.model";
import { MuseumPlace } from "./../../../models/museum-place.model";
import { ChurchPlace } from "./../../../models/church-place.model";

import { DisplayTouristicPlaces } from "../../../data/touristic-places";
import { DisplayMuseumPlaces } from "../../../data/museum-places";
import { DisplayChurchPlaces } from "../../../data/church-places";

import { SuccessModalComponent } from "../../../components/modals/success-modal/success-modal.component";

@Component({
  selector: "app-recent-places",
  templateUrl: "./recent-places.page.html",
  styleUrls: ["./recent-places.page.scss"],
})
export class RecentPlacesPage implements OnInit {
  historicPlaces: HistoricPlace[];
  museumPlaces: MuseumPlace[];
  churchPlaces: ChurchPlace[];

  constructor(
    private showHistoricPlaces: DisplayTouristicPlaces,
    private showMuseumPlaces: DisplayMuseumPlaces,
    private showChurchPlaces: DisplayChurchPlaces,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.historicPlaces = this.showHistoricPlaces.getTouristicPlaces;
    this.museumPlaces = this.showMuseumPlaces.getMuseumPlaces;
    this.churchPlaces = this.showChurchPlaces.getChurchPlaces;
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
