import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShareModalPage } from './share-modal.page';

describe('ShareModalPage', () => {
  let component: ShareModalPage;
  let fixture: ComponentFixture<ShareModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShareModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
