import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhonebookPage } from './phonebook.page';

describe('PhonebookPage', () => {
  let component: PhonebookPage;
  let fixture: ComponentFixture<PhonebookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonebookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhonebookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
