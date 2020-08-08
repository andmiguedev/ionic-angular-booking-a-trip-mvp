import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecentPlacesPage } from './recent-places.page';

describe('RecentPlacesPage', () => {
  let component: RecentPlacesPage;
  let fixture: ComponentFixture<RecentPlacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentPlacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecentPlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
