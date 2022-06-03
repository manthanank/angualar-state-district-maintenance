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
  data1: any;
  data2: any;
  div1: boolean = false;
  div2: boolean = false;
  stateValues: any;
  districtValues: any;
  addStateName: any;
  addDistrictName: any;
  stateName = new FormControl('');
  districtName = new FormControl('');

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getStates().subscribe((data: any) => {
      this.stateValues = data;
      console.log(this.stateValues);
    });
    this.dataService.getDistricts().subscribe((data: any) => {
      this.districtValues = data;
      console.log(this.districtValues);
    });
  }
  addState() {
    this.div1 = true;
  }
  cancelState() {
    this.div1 = false;
    this.stateName.reset();
  }
  states(data: any) {
    console.log(data);
    this.dataService.postStates(data).subscribe((data: any) => {
      console.log(data);
    });
  }
  addDistrict() {
    this.div2 = true;
  }
  cancelDistrict() {
    this.div2 = false;
    this.districtName.reset();
  }
  districts(data: any) {
    console.log(data);
    this.dataService.postDistricts(data).subscribe((data: any) => {
      console.log(data);
    });
  }
}
