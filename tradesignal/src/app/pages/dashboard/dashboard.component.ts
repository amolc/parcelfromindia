import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  user: any
  data: any;

  constructor(public formBuilder: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private route: ActivatedRoute) {




  }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('token')).users
    console.log(this.user)
    this.getdata();
  }
  getdata() {


    return new Promise((resolve, reject) => {


      console.log(JSON.parse(localStorage.getItem("token")).users["_id"]);
      this.http
        .get(
          "https://api.80startups.com/2/tradeAnalysts/getAnalystByuserId/" +
          JSON.parse(localStorage.getItem("token")).users["_id"]
        )
        .subscribe(
          (result) => {
            console.log("result", result);


            // console.log('anayst_id', result[0]._id)
            localStorage.setItem('anayst_id', result['message'] != 'no records found' ? result[0]._id : undefined)
            //this.data.push(result);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }
}
