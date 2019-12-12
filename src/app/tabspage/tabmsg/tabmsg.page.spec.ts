import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabmsgPage } from './tabmsg.page';

describe('TabmsgPage', () => {
  let component: TabmsgPage;
  let fixture: ComponentFixture<TabmsgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabmsgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabmsgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
