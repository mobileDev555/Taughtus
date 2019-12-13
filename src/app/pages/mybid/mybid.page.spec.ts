import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MybidPage } from './mybid.page';

describe('MybidPage', () => {
  let component: MybidPage;
  let fixture: ComponentFixture<MybidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MybidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
