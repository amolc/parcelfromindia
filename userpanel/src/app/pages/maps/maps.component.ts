import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  pickupForm: FormGroup;
  error_messages: any = {};
  params: any;
  constructor(public formBuilder: FormBuilder,
    private http: HttpClient,
    public router: Router) { 
      this.pickupFormData();
    }

  ngOnInit(): void {
  }
  pickupFormData() {
    this.error_messages = {


      fname: [
        { type: "required", message: 'First Name is Required' }
      ],
      lname: [
        { type: "required", message: 'lname is Required' }
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
      
      
      city:[
        { type: "required", message: "city is Required." },
      ],
       state:[
        { type: "required", message: "state is Required." },
      ],
      country:[
        { type: "required", message: "country is Required." },
      ],
      
      postal_code:[
        { type: "required", message: "country is Required." },
      ],
      address:[
        { type: "required", message: "address is Required." },
      ],
      address2:[
        { type: "required", message: "address is Required." },
      ],
        weight:[
        { type: "required", message: "weight is Required." },
      ],
       height:[
        { type: "required", message: "height is Required." },
      ],   
      width:[
        { type: "required", message: "width is Required." },
      ],
      length:[
        { type: "required", message: "length is Required." },
      ],
      package_items:[
        { type: "required", message: "package_items is Required." },
      ],
      no_of_packages:[
        { type: "required", message: "no_of_packages is Required." },
      ],
    };
    this.pickupForm = this.formBuilder.group(
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
        
        city: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            
          ])
        ),
        
        state: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            
          ])
        ),
        country: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            
          ])
        ),
        postal_code:new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),
        address:new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),
         address2: new FormControl(
           "",Validators.compose([
            Validators.required,

          ])
         ),
         weight: new FormControl(
          "",Validators.compose([
           Validators.required,

         ])
        ),
        height: new FormControl(
          "",Validators.compose([
           Validators.required,

         ])
        ),
        
        length: new FormControl(
          "",Validators.compose([
           Validators.required,

         ])
        ),
        width: new FormControl(
          "",Validators.compose([
           Validators.required,

         ])
        ),
        package_items: new FormControl(
          "",Validators.compose([
           Validators.required,

         ])
        ),
        no_of_packages: new FormControl(
          "",Validators.compose([
           Validators.required,

         ])
        ),
        
        
        
        
        
        
        
  
      },
    );
  }


  pickup() {


    this.params = {
      "fname": this.pickupForm.value.fname,
      "lname": this.pickupForm.value.lname,
      "mobile": this.pickupForm.value.mobile,
      
      "email": this.pickupForm.value.email,
      "city": this.pickupForm.value.city,
      "state": this.pickupForm.value.state,
      "country":this.pickupForm.value.country,
      "postal_code":this.pickupForm.value.postal_code,
      "address":this.pickupForm.value.address,
      "address2":this.pickupForm.value.address2,
      "weight":this.pickupForm.value.weight,
      "length":this.pickupForm.value.length,
      "width":this.pickupForm.value.width,
      "height":this.pickupForm.value.height,
      "package_items":this.pickupForm.value.package_items,
      "no_of_packages":this.pickupForm.value.no_of_packages,

      
      
    }
    return new Promise((resolve, reject) => {
      this.http.post("https://api.80startups.com/parcel/createParcel", this.params).subscribe(result => {
        console.log("result", result);
        this.router.navigateByUrl('/DashBorad')
      },
        err => {
          console.log(err);
          alert("please enter email ");
          // reject(err);
        }
      );
    });
  }

  
}
