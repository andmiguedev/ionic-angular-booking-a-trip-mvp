import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditTourPage } from './edit-tour.page';

describe('EditTourPage', () => {
  let component: EditTourPage;
  let fixture: ComponentFixture<EditTourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
