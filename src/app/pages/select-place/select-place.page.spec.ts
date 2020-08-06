import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { SelectPlacePage } from "./select-place.page";

describe("SelectPlacesPage", () => {
  let component: SelectPlacePage;
  let fixture: ComponentFixture<SelectPlacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectPlacePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
