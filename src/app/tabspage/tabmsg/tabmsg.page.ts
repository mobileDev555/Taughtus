import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tabmsg',
  templateUrl: './tabmsg.page.html',
  styleUrls: ['./tabmsg.page.scss'],
})
export class TabmsgPage implements OnInit {

  constructor(private location: Location) { }
  goback() {
    this.location.back();
  }
  ngOnInit() {
  }

}
