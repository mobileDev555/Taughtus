import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobcompletePage } from './jobcomplete.page';

describe('JobcompletePage', () => {
  let component: JobcompletePage;
  let fixture: ComponentFixture<JobcompletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobcompletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobcompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
