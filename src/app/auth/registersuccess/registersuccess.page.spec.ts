import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistersuccessPage } from './registersuccess.page';

describe('RegistersuccessPage', () => {
  let component: RegistersuccessPage;
  let fixture: ComponentFixture<RegistersuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistersuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistersuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
