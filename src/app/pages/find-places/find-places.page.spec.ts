import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindPlacesPage } from './find-places.page';

describe('FindPlacesPage', () => {
  let component: FindPlacesPage;
  let fixture: ComponentFixture<FindPlacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPlacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindPlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
