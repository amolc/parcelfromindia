import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-createplan',
  templateUrl: './createplan.component.html',
  styleUrls: ['./createplan.component.css']
})
export class CreateplanComponent implements OnInit {
  planForm: FormGroup;
  error_messages: any = {};
  params: any;
  data: any;
  constructor(public formBuilder: FormBuilder, private http: HttpClient, public router: Router, private route: ActivatedRoute) {
    this.planFormData();
    this.getdata1();
  }

  ngOnInit(): void {
    this.getdata1();
  }
  planFormData() {
    this.error_messages = {
      planname: [
        { type: "required", message: 'planname is Required' },

      ],

      planinfo: [
        { type: "required", message: 'planinfo is Required' }
      ],
      planduration: [
        { type: "required", message: ' planduration is Required' }
      ],
      planowner: [
        { type: "required", message: 'planowner is Required' }
      ],
      planstart: [
        { type: "required", message: 'planstart is Required' }
      ],
      planend: [
        { type: "required", message: 'planend is Required' }
      ],
      planpricemonthly: [
        { type: "required", message: 'planpricemonthly is Required' }
      ],
      planpriceannual: [
        { type: "required", message: 'planpriceannual is Required' }
      ],

    };
    this.planForm = this.formBuilder.group(
      {
        planname: new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),
        planinfo: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        planduration: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        planowner: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        planstart: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        planend: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        planpricemonthly: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        planpriceannual: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),


      },
    );
  }
  plans(_id) {
    // this.router.navigate(["/Creatplan/", id]);
    //this.router.navigate(["/india-stocks"]);
    console.log(_id);
    this.router.navigateByUrl("/india-stocks/" + _id);
  }
  signal() {
    this.router.navigateByUrl("/signals");
  }
  //this.data = []
  //   return new Promise((resolve, reject) => {
  //     //console.log(this.Anayst_id)
  //     this.http.get("https://api.80startups.com/2/tradePlan/getPlanById/" + id + '/' + JSON.parse(localStorage.getItem('token')).users['_id']).subscribe(result => {
  //       console.log("result", result);

  //       this.data = result;

  //     },
  //       err => {
  //         reject(err);
  //       }
  //     );
  //   });

  //   //console.log(id)

  plan() {
    this.params = {
      "planname": this.planForm.controls.planname.value,
      "planinfo": this.planForm.controls.planinfo.value,
      "planduration": this.planForm.controls.planduration.value,
      "planowner": this.planForm.controls.planowner.value,
      "planstart": this.planForm.controls.planstart.value,
      "planend": this.planForm.controls.planend.value,
      "planpricemonthly": this.planForm.controls.planpricemonthly.value,
      "planpriceannual": this.planForm.controls.planpriceannual.value,
      "userid": JSON.parse(localStorage.getItem('token')).users['_id']
    }
    return new Promise((resolve, reject) => {
      this.http.post("https://api.80startups.com/2/tradePlan/createTradingPlans", this.params).subscribe(result => {
        console.log(result, "result");
        //localStorage.setItem('token', JSON.stringify(result['users'].tokens))
        this.router.navigateByUrl("/india-stocks/" + result['id']);
      },
        err => {
          console.log(err);
          alert("please enter the deatils");
        }
      );
    });
  }
  getdata1() {
    this.data = []
    return new Promise((resolve, reject) => {
      //console.log(this.Anayst_id)
      this.http.get("https://api.80startups.com/2/tradePlan/getAllPlans").subscribe(result => {
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
