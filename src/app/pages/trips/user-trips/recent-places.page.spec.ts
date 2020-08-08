import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { UserTripsPage } from "./user-trips.page";

describe("UserTripsPage", () => {
  let component: UserTripsPage;
  let fixture: ComponentFixture<UserTripsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserTripsPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(UserTripsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
