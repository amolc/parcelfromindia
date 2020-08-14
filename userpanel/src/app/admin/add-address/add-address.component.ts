import { Component, OnInit } from '@angular/core';
//import { UserService } from '../user.service';
import {FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css'],
})
export class AddAddressComponent implements OnInit {
  addresForm: FormGroup;
  error_messages: any = {};
  params: any;
  constructor(
    public formBuilder: FormBuilder,
    private http: HttpClient,
    public router: Router
  ) {
    this.setupAddressFormData();
  }
  fname = '';
  lname = '';
  address = '';
  address2 = '';
  city = '';
  state = '';
  country = '';
  mobile = '';
  postal_code = '';

  checkvalue(event) {
    if (event.target.value == 'yes') {
      //this.addressForm.value.fname=this.addressForm.value.fname
      //this.addressForm.value.fname=this.addressForm.value.fname
      (this.fname = this.addresForm.controls.fname.value),
        (this.lname = this.addresForm.controls.lname.value),
        (this.address = this.addresForm.controls.address.value),
        (this.address2 = this.addresForm.controls.address2.value),
        (this.city = this.addresForm.controls.city.value),
        (this.state = this.addresForm.controls.state.value),
        (this.country = this.addresForm.controls.country.value),
        (this.mobile = this.addresForm.controls.mobile.value),
        (this.postal_code = this.addresForm.controls.postal_code.value);
    } else {
      (this.fname = null),
        (this.lname = null),
        (this.address = null),
        (this.address2 = null),
        (this.city = null),
        (this.state = null),
        (this.country = null),
        (this.mobile = null),
        (this.postal_code = null);
    }
  }

  setupAddressFormData() {
    this.error_messages = {
      fname: [{ type: 'required', message: 'First Name is Required' }],
      lname: [{ type: 'required', message: 'lname is Required' }],

      address: [{ type: 'required', message: 'address  is required.' }],
      address2: [{ type: 'required', message: 'address2  is required.' }],
      city: [{ type: 'required', message: 'city  is required.' }],
      state: [{ type: 'required', message: 'state  is required.' }],
      country: [{ type: 'required', message: 'country  is required.' }],
      postal_code: [{ type: 'required', message: 'postal code  is required.' }],
      mobile: [
        { type: 'required', message: 'mobile Number  is required.' },
        { type: 'minlength', message: 'minimun length should be 10 .' },
        { type: 'maxlength', message: 'maximum length should be 12 .' },
      ],

      fnames: [{ type: 'required', message: 'First Name is Required' }],
      lnames: [{ type: 'required', message: 'lname is Required' }],

      address1: [{ type: 'required', message: 'address  is required.' }],
      addresss2: [{ type: 'required', message: 'address2  is required.' }],
      city1: [{ type: 'required', message: 'city  is required.' }],
      state1: [{ type: 'required', message: 'state  is required.' }],
      country1: [{ type: 'required', message: 'country  is required.' }],
      postal_code1: [
        { type: 'required', message: 'postal code  is required.' },
      ],
      mobile1: [
        { type: 'required', message: 'mobile Number  is required.' },
        { type: 'minlength', message: 'minimun length should be 10 .' },
        { type: 'maxlength', message: 'maximum length should be 12 .' },
      ],
    };
    this.addresForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([Validators.required])),
      lname: new FormControl('', Validators.compose([Validators.required])),

      address: new FormControl('', Validators.compose([Validators.required])),
      address2: new FormControl('', Validators.compose([Validators.required])),
      city: new FormControl('', Validators.compose([Validators.required])),
      state: new FormControl('', Validators.compose([Validators.required])),
      country: new FormControl('', Validators.compose([Validators.required])),
      postal_code: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      mobile: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(12),
        ])
      ),
      fnames: new FormControl('', Validators.compose([Validators.required])),
      lnames: new FormControl('', Validators.compose([Validators.required])),

      address1: new FormControl('', Validators.compose([Validators.required])),
      addresss2: new FormControl('', Validators.compose([Validators.required])),
      city1: new FormControl('', Validators.compose([Validators.required])),
      state1: new FormControl('', Validators.compose([Validators.required])),
      country1: new FormControl('', Validators.compose([Validators.required])),
      postal_code1: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      mobile1: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(12),
        ])
      ),
    });
  }
  ngOnInit(): void {}
  addres() {
    this.params = {
      fname: this.addresForm.controls.fname.value,
      lname: this.addresForm.controls.lname.value,
      address: this.addresForm.controls.address.value,
      address2: this.addresForm.controls.address2.value,
      mobile: this.addresForm.controls.mobile.value,

      city: this.addresForm.controls.city.value,
      state: this.addresForm.controls.state.value,
      country: this.addresForm.controls.country.value,
      postal_code: this.addresForm.controls.postal_code.value,

      fnames:
        this.addresForm.controls.fnames.value == ''
          ? this.fname
          : this.addresForm.controls.fnames.value,

      lnames:
        this.addresForm.controls.lnames.value == ''
          ? this.lname
          : this.addresForm.controls.lnames.value,

      address1:
        this.addresForm.controls.address1.value == ''
          ? this.address
          : this.addresForm.controls.address1.value,

      addresss2:
        this.addresForm.controls.addresss2.value == ''
          ? this.address2
          : this.addresForm.controls.addresss2.value,

      mobile1:
        this.addresForm.controls.mobile1.value == ''
          ? this.mobile
          : this.addresForm.controls.mobile1.value,

      city1:
        this.addresForm.controls.city1.value == ''
          ? this.city
          : this.addresForm.controls.city1.value,

      state1:
        this.addresForm.controls.state1.value == ''
          ? this.state
          : this.addresForm.controls.state1.value,

      country1:
        this.addresForm.controls.country1.value == ''
          ? this.country
          : this.addresForm.controls.country1.value,

      postal_code1:
        this.addresForm.controls.postal_code1.value == ''
          ? this.postal_code
          : this.addresForm.controls.postal_code1.value,
    };
    //console.log(this.params);
    return new Promise((resolve, reject) => {
      this.http.post("https://api.80startups.com/user/createUser", this.params).subscribe(result => {
        console.log("result", result);
        this.router.navigateByUrl('/DashBorad')
      },
        err => {
          console.log(err);
          alert("please enter fill ");
          // reject(err);
        }
      ); 
    }); 
  }
}