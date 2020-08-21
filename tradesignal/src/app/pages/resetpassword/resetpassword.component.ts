import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  loginForm: FormGroup;
  error_messages: any = {};
  params: any;
  constructor(public router: Router,public formBuilder: FormBuilder, private http: HttpClient) {
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
        
      },
    );
  }

  doLogin() {
    this.params = {
      "email": this.loginForm.value.email,
      
    }
    return new Promise((resolve, reject) => {
      this.http.post("https://api.80startups.com/auth/loginUser/1", this.params).subscribe(result => {
        console.log(result,"result");
        this.router.navigateByUrl('/AddAddress');
      },
        err => {
          console.log(err);
          alert("please enter correct email and password");
        }
      );
    });
  }

 

}
