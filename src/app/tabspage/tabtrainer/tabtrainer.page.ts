import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tabtrainer',
  templateUrl: './tabtrainer.page.html',
  styleUrls: ['./tabtrainer.page.scss'],
})
export class TabtrainerPage implements OnInit {

  constructor(private location: Location) { }

  goback() {
    this.location.back();
  }
  ngOnInit() {
  }

}
