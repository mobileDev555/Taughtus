import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-confirmmsg',
  templateUrl: './confirmmsg.page.html',
  styleUrls: ['./confirmmsg.page.scss'],
})
export class ConfirmmsgPage implements OnInit {

  constructor(private location: Location) { }

  goback() {
    this.location.back();
  }
  ngOnInit() {
  }

}
