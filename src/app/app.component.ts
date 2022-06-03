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

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getStates().subscribe((data: any) => {
      this.state = data;
      console.log(this.state);
    });
    this.dataService.getDistricts().subscribe((data: any) => {
      this.district = data;
      console.log(this.district);
    });
  }
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
