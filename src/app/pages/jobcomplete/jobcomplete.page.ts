import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
@Component({
  selector: 'app-jobcomplete',
  templateUrl: './jobcomplete.page.html',
  styleUrls: ['./jobcomplete.page.scss'],
})
export class JobcompletePage implements OnInit {

  flag : boolean = false;
  constructor(private location: Location) {
    this.flag = this.flag;
   }

  checkReview() {
    if(this.flag) this.flag = false;
    else this.flag = true;
  }
  goback() {
    this.location.back();
  }
  ngOnInit() {
  }

}
