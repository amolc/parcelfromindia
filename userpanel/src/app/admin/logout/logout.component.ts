import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  signUpForm: FormGroup;
  error_messages: any = {};
  params:any;
  constructor(public router: Router,
    public formBuilder: FormBuilder, private http: HttpClient) { 
      this.setupLoginFormData();
    }

  ngOnInit(): void {
  }
  setupLoginFormData() {
    this.error_messages = {


      fname: [
        { type: "required", message: 'First Name is Required' }
      ],
      lname: [
        { type: "required", message: 'lname is Required' }
      ],
      phone: [
        { type: "required", message: "Phone Number  is required." },
        { type: "minlength", message: "minimun length should be 10 ." },
        { type: "maxlength", message: "maximum length should be 12 ." }
      ],
      mobile: [
        { type: "required", message: "mobile Number  is required." },
        { type: "minlength", message: "minimun length should be 10 ." },
        { type: "maxlength", message: "maximum length should be 12 ." }
      ],
      email: [
        { type: "required", message: 'Email is Required' },
        { type: "pattern", message: 'Please Enter valid Email' }
      ],
      
      password: [
         { type: "required", message: "Password is Required." },
        { type: "minlength", message: "minimun length should be 8 ." },
        { type: "maxlength", message: "maximum length should be 12 ." }
      ],
      company_name: [
        { type: "required", message: "company_name is Required." },
        { type: "minlength", message: "minimun length should be 2 ." },
        { type: "maxlength", message: "maximum length should be 500 ." }
      ],
      crn:[{ type: "required", message: "crn is Required." },
      { type: "minlength", message: "minimun length should be 2 ." },
      { type: "maxlength", message: "maximum length should be 500 ." }],
      established:[
        { type: "required", message: "established is Required." },
      { type: "minlength", message: "minimun length should be 2 ." },
      { type: "maxlength", message: "maximum length should be 500 ." }
    ],
      distributor:[
        { type: "required", message: " distributor is Required." },
      ],
      
      address:[
        { type: "required", message: " address is Required." },
      ],
      address2:[
        { type: "required", message: " address2 is Required." },
      ],
      city:[
        { type: "required", message: " city is Required." },
      ],
      state:[
        { type: "required", message: " state is Required." },
      ],
      country:[
        { type: "required", message: " country is Required." },
      ],
      postal_code:[
        { type: "required", message: " postal_code is Required." },
      ],
      buy:[
        { type: "required", message: " buy is Required." },
      ],
      sell:[
        { type: "required", message: " sell is Required." },
      ],
      information:[
        { type: "required", message: " information is Required." },
      ],
      image:[],
      date:[],
      accesslevel:[],
      project_id:[],


    };
    this.signUpForm = this.formBuilder.group(
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
        phone: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(12)
          ])
        ),
        mobile: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(12)
          ])
        ),
        email: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
          ])
        ),
        
        password: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(12)
          ])
        ),
        company_name: new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        crn:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        established:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        distributor:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        
        address:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        address2:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        city:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        state:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        country:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        postal_code:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        buy:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        sell:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        information:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        image:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        date:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        accesslevel:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        project_id:new FormControl (
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
  
      },
    );
  }


  doRegister() {


    this.params = {
      "fname": this.signUpForm.value.fname,
      "lname": this.signUpForm.value.lname,
      "mobile": this.signUpForm.value.mobile,
      "phone": this.signUpForm.value.phone,
      "email": this.signUpForm.value.email,
      "password": this.signUpForm.value.password,
      "company_name":this.signUpForm.value.company_name,
      "crn":this.signUpForm.value.crn,
      "established":this.signUpForm.value.established,
      "distributor": this.signUpForm.value.distributor,
      
      "address":this.signUpForm.value.address,
      "address2":this.signUpForm.value.address2,
      "city":this.signUpForm.value.city,
      "state":this.signUpForm.value.state,
      "country":this.signUpForm.value.country,
      "postal_code":this.signUpForm.value.postal_code,
      "buy":this.signUpForm.value.buy,
      "sell":this.signUpForm.value.sell,
      "information":this.signUpForm.value.information,
      "image":this.signUpForm.value.image,
      "date":this.signUpForm.value.date,
      "accesslevel":this.signUpForm.value.accesslevel,
      "project_id":this.signUpForm.value.project_id,
    }
    return new Promise((resolve, reject) => {
      this.http.post("https://api.80startups.com/user/createUser", this.params).subscribe(result => {
        console.log("result", result);
        this.router.navigateByUrl('/login')
      },
        err => {
          console.log(err);
          alert("please enter unique mobile number and password");
          // reject(err);
        }
      );
    });
  }

  signin(){
    this.router.navigateByUrl('/login');
  }

}
