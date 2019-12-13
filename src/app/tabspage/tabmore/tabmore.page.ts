import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-tabmore',
  templateUrl: './tabmore.page.html',
  styleUrls: ['./tabmore.page.scss'],
})
export class TabmorePage implements OnInit {

  constructor(private location: Location) { }

  goback() {
    this.location.back();
  }
  ngOnInit() {
  }

}
