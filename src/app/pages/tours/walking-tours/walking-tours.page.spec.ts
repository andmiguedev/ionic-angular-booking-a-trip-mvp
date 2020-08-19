import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalkingToursPage } from './walking-tours.page';

describe('WalkingToursPage', () => {
  let component: WalkingToursPage;
  let fixture: ComponentFixture<WalkingToursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkingToursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalkingToursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
