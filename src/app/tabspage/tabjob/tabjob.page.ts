import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tabjob',
  templateUrl: './tabjob.page.html',
  styleUrls: ['./tabjob.page.scss'],
})
export class TabjobPage implements OnInit {

  constructor(private location: Location) { }

  goback() {
    this.location.back();
  }
  ngOnInit() {
  }

}
