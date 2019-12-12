import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExplainPage } from './explain.page';

describe('ExplainPage', () => {
  let component: ExplainPage;
  let fixture: ComponentFixture<ExplainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExplainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
