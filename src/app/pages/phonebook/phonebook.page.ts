import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.page.html',
  styleUrls: ['./phonebook.page.scss'],
})
export class PhonebookPage implements OnInit {

  constructor(private locaiton: Location) { }

  goback() {
    this.locaiton.back();
  }
  ngOnInit() {
  }

}
