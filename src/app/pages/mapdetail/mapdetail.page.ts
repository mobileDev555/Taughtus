import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
@Component({
  selector: 'app-mapdetail',
  templateUrl: './mapdetail.page.html',
  styleUrls: ['./mapdetail.page.scss'],
})
export class MapdetailPage implements OnInit {

  constructor(private location: Location) { }

  goback() {
    this.location.back();
  }
  ngOnInit() {
  }

}
