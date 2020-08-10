import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferPlacesPage } from './offer-places.page';

describe('OfferPlacesPage', () => {
  let component: OfferPlacesPage;
  let fixture: ComponentFixture<OfferPlacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferPlacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfferPlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
