import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
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

      shipping_fname: [{ type: 'required', message: 'First Name is Required' }],
      shipping_lname: [{ type: 'required', message: 'lname is Required' }],

      shipping_address: [{ type: 'required', message: 'address  is required.' }],
      shipping_address2: [{ type: 'required', message: 'address2  is required.' }],
      shipping_city: [{ type: 'required', message: 'city  is required.' }],
      shipping_state: [{ type: 'required', message: 'state  is required.' }],
      shipping_country: [{ type: 'required', message: 'country  is required.' }],
      shipping_postal_code: [
        { type: 'required', message: 'postal code  is required.' },
      ],
      shipping_mobile: [
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
      shipping_fname: new FormControl('', Validators.compose([Validators.required])),
      shipping_lname: new FormControl('', Validators.compose([Validators.required])),

      shipping_address: new FormControl('', Validators.compose([Validators.required])),
      shipping_address2: new FormControl('', Validators.compose([Validators.required])),
      shipping_city: new FormControl('', Validators.compose([Validators.required])),
      shipping_state: new FormControl('', Validators.compose([Validators.required])),
      shipping_country: new FormControl('', Validators.compose([Validators.required])),
      shipping_postal_code: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      shipping_mobile: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(12),
        ])
      ),

    });
  }
  ngOnInit(): void { }
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

      shipping_fname:
        this.addresForm.controls.shipping_fname.value == ''
          ? this.fname
          : this.addresForm.controls.shipping_fname.value,

      shipping_lname:
        this.addresForm.controls.shipping_lname.value == ''
          ? this.lname
          : this.addresForm.controls.shipping_lname.value,

      shipping_address:
        this.addresForm.controls.shipping_address.value == ''
          ? this.address
          : this.addresForm.controls.shipping_address.value,

      shipping_address2:
        this.addresForm.controls.shipping_address2.value == ''
          ? this.address2
          : this.addresForm.controls.shipping_address2.value,

      shipping_mobile:
        this.addresForm.controls.shipping_mobile.value == ''
          ? this.mobile
          : this.addresForm.controls.shipping_mobile.value,

      shipping_city:
        this.addresForm.controls.shipping_city.value == ''
          ? this.city
          : this.addresForm.controls.shipping_city.value,

      shipping_state:
        this.addresForm.controls.shipping_state.value == ''
          ? this.state
          : this.addresForm.controls.shipping_state.value,

      shipping_country:
        this.addresForm.controls.shipping_country.value == ''
          ? this.country
          : this.addresForm.controls.shipping_country.value,

      shipping_postal_code:
        this.addresForm.controls.shipping_postal_code.value == ''
          ? this.postal_code
          : this.addresForm.controls.shipping_postal_code.value,
      owner: "5f32ca5c8f33c3b541702c12"
    };
    console.log(this.params);
    //   return new Promise((resolve, reject) => {
    //     this.http.post("https://labs.80startups.com/api/v1/1/shipment/createshipment", this.params).subscribe(result => {
    //       console.log("result", result);
    //       this.router.navigateByUrl('/dashboard')
    //     },
    //       err => {
    //         console.log(err);
    //         alert("please enter fill ");
    //         // reject(err);
    //       }
    //     );
    //   });


  }
}
