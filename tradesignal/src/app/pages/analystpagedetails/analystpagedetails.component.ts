import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-analystpagedetails',
  templateUrl: './analystpagedetails.component.html',
  styleUrls: ['./analystpagedetails.component.css']
})
export class AnalystpagedetailsComponent implements OnInit {
  analystForm: FormGroup;
  error_messages: any = {};
  params: any;
  config: any;

  data: any;
  constructor(public formBuilder: FormBuilder, private http: HttpClient, public router: Router) {
    this.analystFormData();
    this.getdata();



    this.config = {
      itemsPerPage: 10,
      currentPage: 1,

    };
  }

  ngOnInit(): void {
  }
  analystFormData() {
    this.error_messages = {
      fname: [
        { type: "required", message: 'fname is Required' },

      ],

      lname: [
        { type: "required", message: 'lname is Required' }
      ],
      markets: [
        { type: "required", message: 'markets is Required' }
      ],
      bio: [
        { type: "required", message: 'bio is Required' }
      ],
      summary: [
        { type: "required", message: 'summary is Required' }
      ],

    };
    this.analystForm = this.formBuilder.group(
      {
        fname: new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),
        lname: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        bio: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        markets: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        summary: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),

      },
    );
  }
  analyst() {
    this.params = {
      "fname": this.analystForm.controls.fname.value,
      "lname": this.analystForm.controls.lname.value,
      "bio": this.analystForm.controls.bio.value,
      "markets": this.analystForm.controls.markets.value,
      "summary": this.analystForm.controls.summary.value,

    }
    return new Promise((resolve, reject) => {
      this.http.post("https://api.80startups.com/tradeAnalysts/createTradingAnalyst", this.params).subscribe(result => {
        console.log(result, "result");
        //localStorage.setItem('token', JSON.stringify(result['users'].tokens))
        this.router.navigateByUrl('/dashboard');
      },
        err => {
          console.log(err);
          alert("please enter correct filled");
        }
      );
    });
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  getdata() {
    return new Promise((resolve, reject) => {
      this.http.get("https://api.80startups.com/tradePlan/getAllPlans").subscribe(result => {
        console.log("result", result);
        this.data = result;

      },
        err => {
          reject(err);
        }
      );
    });
  }
}
