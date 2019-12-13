import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-myjob',
  templateUrl: './myjob.page.html',
  styleUrls: ['./myjob.page.scss'],
})
export class MyjobPage implements OnInit {

  constructor(private location: Location) { }

  goback() {
    this.location.back();
  }
  ngOnInit() {
  }

}
