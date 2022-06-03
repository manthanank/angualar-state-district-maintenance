import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  div1: boolean = false;
  div2: boolean = false;
  state: any;
  district: any;

  statesName = new FormControl('');
  districtName = new FormControl('');

  constructor() {}
  ngOnInit() {}
  addState() {
    this.div1 = true;
  }
  cancelState() {
    this.div1 = false;
    this.statesName.reset();
  }
  states() {}
  addDistrict() {
    this.div2 = true;
  }
  cancelDistrict() {
    this.div2 = false;
    this.districtName.reset();
  }
  districts() {}
}
