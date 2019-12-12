import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabmorePage } from './tabmore.page';

describe('TabmorePage', () => {
  let component: TabmorePage;
  let fixture: ComponentFixture<TabmorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabmorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabmorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
