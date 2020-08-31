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
  images: any;
  constructor(public formBuilder: FormBuilder, private http: HttpClient, public router: Router) {
    this.analystFormData();





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
      username: [
        { type: "required", message: 'username is Required' }
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
      facebook: [
        { type: "required", message: 'facebook link is Required' }
      ],
      whatsapp: [
        { type: "required", message: 'whatsapp link is Required' }
      ],
      telegrem: [
        { type: "required", message: 'telegrem is Required' }
      ],
      file: [
        { type: "required", message: 'file is Required' }
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
        facebook: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        whatsapp: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        telegrem: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        username: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        file: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
      },
    );
  }
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      console.log(file)
    }
  }
  analyst() {
    JSON.parse(localStorage.getItem('token')).users['_id']
    this.params = {
      "fname": this.analystForm.controls.fname.value,
      "lname": this.analystForm.controls.lname.value,
      "bio": this.analystForm.controls.bio.value,
      "markets": this.analystForm.controls.markets.value,
      "summary": this.analystForm.controls.summary.value,
      "facebook": this.analystForm.controls.facebook.value,
      "whatsapp": this.analystForm.controls.whatsapp.value,
      "telegrem": this.analystForm.controls.telegrem.value,
      "username": this.analystForm.controls.username.value,
      "file": this.analystForm.controls.file.value,
      "userid": JSON.parse(localStorage.getItem('token')).users['_id']
    }
    //console.log(this.params)
    return new Promise((resolve, reject) => {
      console.log(JSON.parse(localStorage.getItem('token')).users['_id'])
      this.http.post("https://api.80startups.com/tradeAnalysts/createTradingAnalyst", this.params).subscribe(result => {
        console.log(result, "result");
        // localStorage.setItem('Analyst', JSON.stringify(result))
        console.log('/Analystview/' + result['id'])
        this.router.navigateByUrl('/Analystview/' + result['id']);
      },
        err => {
          console.log(err);
          alert("please enter correct filled");
        }
      );
    });
  }


}
