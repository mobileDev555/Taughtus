import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapdetailPage } from './mapdetail.page';

describe('MapdetailPage', () => {
  let component: MapdetailPage;
  let fixture: ComponentFixture<MapdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
