import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
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

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}
  stateForm = this.formBuilder.group({
    stateName: this.stateName,
  });
  districtForm = this.formBuilder.group({
    districtName: this.districtName,
  });
  ngOnInit() {
    this.dataService.getStates().subscribe((data: any) => {
      this.stateValues = data;
      console.log(this.stateValues);
    });
    this.dataService.getDistricts().subscribe((data: any) => {
      this.districtValues = data;
      console.log(this.districtValues);
    });
    this.http.get('localhost:4000/api/data').subscribe((data: any) => {
      console.log(data);
    });
    this.http
      .get('http://localhost:8080/api/tutorials')
      .subscribe((data: any) => {
        console.log(data);
      });
  }
  addState() {
    this.div1 = true;
  }
  cancelState() {
    this.div1 = false;
    this.stateName.reset();
  }
  states() {
    this.http
      .post('http://localhost:3000/states', this.stateForm.value)
      .subscribe((data: any) => {
        console.log(data);
      });

    this.http.get('http://localhost:3000/states').subscribe((data: any) => {
      console.log(data);
    });
    // this.dataService.getStates().subscribe((data: any) => {
    //   this.stateValues = data;
    //   console.log(this.stateValues);
    // });
    this.close();
  }
  close() {
    this.div1 = false;
  }
  addDistrict() {
    this.div2 = true;
  }
  cancelDistrict() {
    this.div2 = false;
    this.districtName.reset();
  }
  districts() {
    this.http
      .post('http://localhost:3000/districts', this.districtForm.value)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
