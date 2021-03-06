import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
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
      },
    );
  }

  doLogin() {
    this.params = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password,
      // "projectid": " 1",
    }
    return new Promise((resolve, reject) => {
      this.http.post("https://labs.80startups.com/api/v1/1/user/loginUser", this.params).subscribe(result => {
        console.log(result, "result");
        // localStorage.setItem('token', JSON.stringify(result['users'].tokens))

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
