import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-mybid',
  templateUrl: './mybid.page.html',
  styleUrls: ['./mybid.page.scss'],
})
export class MybidPage implements OnInit {

  constructor(private location: Location) { }

  goback() {
    this.location.back();
  }
  ngOnInit() {
  }

}
