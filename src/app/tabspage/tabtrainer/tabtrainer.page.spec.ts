import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabtrainerPage } from './tabtrainer.page';

describe('TabtrainerPage', () => {
  let component: TabtrainerPage;
  let fixture: ComponentFixture<TabtrainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabtrainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabtrainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
