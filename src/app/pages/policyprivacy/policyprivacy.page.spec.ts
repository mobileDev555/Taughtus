import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolicyprivacyPage } from './policyprivacy.page';

describe('PolicyprivacyPage', () => {
  let component: PolicyprivacyPage;
  let fixture: ComponentFixture<PolicyprivacyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyprivacyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolicyprivacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
