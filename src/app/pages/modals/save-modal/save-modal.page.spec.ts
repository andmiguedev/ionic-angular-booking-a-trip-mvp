import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaveModalPage } from './save-modal.page';

describe('SaveModalPage', () => {
  let component: SaveModalPage;
  let fixture: ComponentFixture<SaveModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaveModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
