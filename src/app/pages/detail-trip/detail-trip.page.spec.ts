import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailTripPage } from './detail-trip.page';

describe('DetailTripPage', () => {
  let component: DetailTripPage;
  let fixture: ComponentFixture<DetailTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTripPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
