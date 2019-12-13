import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-policyprivacy',
  templateUrl: './policyprivacy.page.html',
  styleUrls: ['./policyprivacy.page.scss'],
})
export class PolicyprivacyPage implements OnInit {

  constructor(private location: Location) { }

  goback() {
    this.location.back();
  }
  ngOnInit() {
  }

}
