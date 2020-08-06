import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripPlacesPage } from './trip-places.page';

describe('TripPlacesPage', () => {
  let component: TripPlacesPage;
  let fixture: ComponentFixture<TripPlacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPlacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TripPlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
