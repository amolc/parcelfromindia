import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { from } from "rxjs";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error_messages: any = {};

  params: any;
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.setupLoginFormData();
  }

  ngOnInit(): void {
    console.log(environment);
  }
  setupLoginFormData() {
    this.error_messages = {
      email: [
        { type: "required", message: "Email is Required" },
        { type: "pattern", message: "Please Enter valid Email" },
      ],

      password: [{ type: "required", message: "Password is Required" }],
    };
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
          ),
        ])
      ),
      password: new FormControl("", Validators.compose([Validators.required])),
    });
  }

  doLogin() {
    this.params = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      projectid: 2,
    };
    return new Promise((resolve, reject) => {
      this.http
        .post(
          environment.baseurl + "auth/loginUser/" + this.params.projectid,
          this.params
        )
        .subscribe(
          (result) => {
            console.log(result, "result");
            localStorage.setItem("token", JSON.stringify(result));
            this.router.navigateByUrl("/dashboard");
          },
          (err) => {
            console.log(err);
            alert("please enter correct email and password");
          }
        );
    });
  }

  register() {
    console.log("register");
    this.router.navigateByUrl("/register");
  }
}
