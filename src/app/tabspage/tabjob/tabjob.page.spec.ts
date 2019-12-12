import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabjobPage } from './tabjob.page';

describe('TabjobPage', () => {
  let component: TabjobPage;
  let fixture: ComponentFixture<TabjobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabjobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabjobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
