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
  statename: any;
  private _jsonURL = './assets/data.json';

  statesName = new FormControl('');
  districtName = new FormControl('');

  constructor(private http: HttpClient, private dataService: DataService) {}
  ngOnInit() {
    this.getdata();
  }
  addState() {
    this.div1 = true;
  }
  cancelState() {
    this.div1 = false;
    this.statesName.reset();
  }
  states() {
    this.getJSON().subscribe((data) => {
      this.state = data.state;
      console.log(this.state);
    });
  }
  addDistrict() {
    this.div2 = true;
  }
  cancelDistrict() {
    this.div2 = false;
    this.districtName.reset();
  }
  districts() {
    this.getJSON().subscribe((data) => {
      this.district = data.district;
      console.log(this.district);
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  public postJSON(data: any): Observable<any> {
    return this.http.post(this._jsonURL, data);
  }

  getdata() {
    this.dataService.getDatas().subscribe((data: any) => {
      this.statename = data.id;
      console.log(data);
    });
  }
  postdata(data: any) {
    this.dataService.postDatas(data).subscribe((data: any) => {
      console.log(data);
    });
  }
}
