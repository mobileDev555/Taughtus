import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobtrainingPage } from './jobtraining.page';

describe('JobtrainingPage', () => {
  let component: JobtrainingPage;
  let fixture: ComponentFixture<JobtrainingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobtrainingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobtrainingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
