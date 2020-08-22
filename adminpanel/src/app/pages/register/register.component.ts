import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpForm: FormGroup;
  error_messages: any = {};
  params: any;
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
      project_id: [
        { type: "required", message: "Project_id is Required." },
      ]





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














      },
    );
  }


  doRegister() {


    this.params = {
      "fname": this.signUpForm.controls.fname.value,
      "lname": this.signUpForm.controls.lname.value,
      "mobile": this.signUpForm.controls.mobile.value,

      "email": this.signUpForm.controls.email.value,
      "password": this.signUpForm.controls.password.value,
      //"project_id": 1,
      "project_id": this.signUpForm.controls.project_id.value,



    }
    return new Promise((resolve, reject) => {
      this.http.post("https://api.80startups.com/user/createUser", this.params).subscribe(result => {
        console.log("result", result);
        this.router.navigateByUrl('/login')
      },
        err => {
          console.log(err);
          alert("please enter email and password");
          // reject(err);
        }
      );
    });
  }

  signin() {
    this.router.navigateByUrl('/login');
  }
}
