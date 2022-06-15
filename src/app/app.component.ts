import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  stateName: any;
  data: any;
  data1: any;
  data2: any;
  div1: boolean = false;
  div2: boolean = false;
  stateValues: any;
  districtValues: any;
  updatedStateValues: any;
  updatedDistrictValues: any;
  addStateName: any;
  addDistrictName: any;
  dropDownForm = new FormGroup({
    state: new FormGroup({
      stateName: new FormControl('', Validators.required),
    }),
    // states: new FormControl('', Validators.required),
    district: new FormGroup({
      districtName: new FormControl('', Validators.required),
    }),
    // districts: new FormControl('', Validators.required),
  });
  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // this.dataService.getState().subscribe((data) => {
    //   this.stateValues = data;
    //   console.log(this.stateValues);
    // });
    // this.dataService.getDistrict().subscribe((data) => {
    //   this.districtValues = data;
    //   console.log(this.districtValues);
    // });
  }
  showaddStatebtn() {
    this.div1 = true;
  }
  cancelState() {
    this.div1 = false;
  }
  // states() {
  //   this.dataService.postState(this.stateForm.value).subscribe((data) => {
  //     this.updatedStateValues = data;
  //     console.log(this.updatedStateValues);
  //   });
  //   this.dataService.getState().subscribe((data) => {
  //     this.stateValues = data;
  //     console.log(this.stateValues);
  //   });
  //   this.stateForm.reset();
  //   this.closeState();
  // }
  closeState() {
    this.div1 = false;
  }
  showaddDistrictbtn() {
    this.div2 = true;
  }
  cancelDistrict() {
    this.div2 = false;
  }
  // districts() {
  //   this.dataService.postDistrict(this.districtForm.value).subscribe((data) => {
  //     console.log(data);
  //     this.updatedDistrictValues = data;
  //     console.log(this.updatedDistrictValues);
  //   });
  //   this.dataService.getDistrict().subscribe((data) => {
  //     this.districtValues = data;
  //     console.log(this.districtValues);
  //   });
  //   this.districtForm.reset();
  //   this.closeDistrict();
  // }
  closeDistrict() {
    this.div2 = false;
  }
  addState() {
    console.log(this.dropDownForm.value);
    this.closeState();
    this.dropDownForm.reset();
  }
  addDistrict() {
    console.log(this.dropDownForm.value);
    this.closeDistrict();
    this.dropDownForm.reset();
  }
}
