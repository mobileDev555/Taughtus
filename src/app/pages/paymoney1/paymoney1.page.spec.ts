import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Paymoney1Page } from './paymoney1.page';

describe('Paymoney1Page', () => {
  let component: Paymoney1Page;
  let fixture: ComponentFixture<Paymoney1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paymoney1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Paymoney1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
