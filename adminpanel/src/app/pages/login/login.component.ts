import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from "../../../environments/environment";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // baseurl: 'https://api.80startups.com/';
  // projectid: '1';
  // Apiurl= 'baseurl' + 'projectid';
  baseurl = environment.url + environment.projectid
  error_messages: any = {};
  params: any;
  constructor(public router: Router, public formBuilder: FormBuilder, private http: HttpClient) {
    this.setupLoginFormData();
  }

  ngOnInit(): void {
  }
  setupLoginFormData() {
    this.error_messages = {
      email: [
        { type: "required", message: 'Email is Required' },
        { type: "pattern", message: 'Please Enter valid Email' }
      ],

      password: [
        { type: "required", message: 'Password is Required' }
      ],
      projectid: [
        { type: "required", message: 'Projectid is Required' }
      ],
    };
    this.loginForm = this.formBuilder.group(
      {
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
          ])
        ),
        projectid: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
      },
    );
  }

  doLogin() {
    this.params = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password,
      "projectid": this.loginForm.value.projectid,
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.baseurl + "/auth/loginUser/", this.params).subscribe(result => {
        console.log(result, "result");
        localStorage.setItem('token', JSON.stringify(result['users'].tokens));
        localStorage.setItem('projectid', JSON.stringify(result['users'].projectid));

        this.router.navigateByUrl('/dashboard');
      },
        err => {
          console.log(err);
          alert("please enter correct email and password");
        }
      );
    });
  }

  register() {
    console.log("register");
    this.router.navigateByUrl('/register');
  }

}
