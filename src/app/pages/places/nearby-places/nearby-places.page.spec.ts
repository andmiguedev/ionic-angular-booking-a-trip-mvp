import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { NearbyPlacesPage } from "./nearby-places.page";

describe("NearbyPlacesPage", () => {
  let component: NearbyPlacesPage;
  let fixture: ComponentFixture<NearbyPlacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NearbyPlacesPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyPlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
