import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {
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


      pickupfname: [
        { type: "required", message: 'First Name is Required' }
      ],
      pickuplname: [
        { type: "required", message: 'lname is Required' }
      ],

      pickupmobile: [
        { type: "required", message: "mobile Number  is required." },
        { type: "minlength", message: "minimun length should be 10 ." },
        { type: "maxlength", message: "maximum length should be 12 ." }
      ],
      pickupemail: [
        { type: "required", message: 'Email is Required' },
        { type: "pattern", message: 'Please Enter valid Email' }
      ],


      pickupcity: [
        { type: "required", message: "city is Required." },
      ],
      pickupstate: [
        { type: "required", message: "state is Required." },
      ],
      pickupcountry: [
        { type: "required", message: "country is Required." },
      ],

      pickuppostal_code: [
        { type: "required", message: "country is Required." },
      ],
      pickupaddress: [
        { type: "required", message: "address is Required." },
      ],
      pickupaddress2: [
        { type: "required", message: "address is Required." },
      ],
      WareHousefname: [
        { type: "required", message: 'First Name is Required' }
      ],
      WareHouselname: [
        { type: "required", message: 'lname is Required' }
      ],

      WareHousemobile: [
        { type: "required", message: "mobile Number  is required." },
        { type: "minlength", message: "minimun length should be 10 ." },
        { type: "maxlength", message: "maximum length should be 12 ." }
      ],
      WareHouseemail: [
        { type: "required", message: 'Email is Required' },
        { type: "pattern", message: 'Please Enter valid Email' }
      ],


      WareHousecity: [
        { type: "required", message: "city is Required." },
      ],
      WareHousestate: [
        { type: "required", message: "state is Required." },
      ],
      WareHousecountry: [
        { type: "required", message: "country is Required." },
      ],

      WareHousepostal_code: [
        { type: "required", message: "country is Required." },
      ],
      WareHouseaddress: [
        { type: "required", message: "address is Required." },
      ],
      WareHouseaddress2: [
        { type: "required", message: "address is Required." },
      ],
      weight: [
        { type: "required", message: "weight is Required." },
      ],
      height: [
        { type: "required", message: "height is Required." },
      ],
      width: [
        { type: "required", message: "width is Required." },
      ],
      length: [
        { type: "required", message: "length is Required." },
      ],
      package_items: [
        { type: "required", message: "package_items is Required." },
      ],
      no_of_packages: [
        { type: "required", message: "no_of_packages is Required." },
      ],
      tracking_no: [
        { type: "required", message: "tracking is Required." },
      ],
      owner: [
        { type: "required", message: "tracking is Required." },
      ],
    };
    this.pickupForm = this.formBuilder.group(
      {
        pickupfname: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        pickuplname: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),

        pickupmobile: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(12)
          ])
        ),
        pickupemail: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
          ])
        ),

        pickupcity: new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),

        pickupstate: new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),
        pickupcountry: new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),
        pickuppostal_code: new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),
        pickupaddress: new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),
        pickupaddress2: new FormControl(
          "", Validators.compose([
            Validators.required,

          ])
        ),
        WareHousefname: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        WareHouselname: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),

        WareHousemobile: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(12)
          ])
        ),
        WareHouseemail: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
          ])
        ),

        WareHousecity: new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),

        WareHousestate: new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),
        WareHousecountry: new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),
        WareHousepostal_code: new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),
        WareHouseaddress: new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),
        WareHouseaddress2: new FormControl(
          "", Validators.compose([
            Validators.required,

          ])
        ),
        weight: new FormControl(
          "", Validators.compose([
            Validators.required,

          ])
        ),
        height: new FormControl(
          "", Validators.compose([
            Validators.required,

          ])
        ),

        length: new FormControl(
          "", Validators.compose([
            Validators.required,

          ])
        ),
        width: new FormControl(
          "", Validators.compose([
            Validators.required,

          ])
        ),
        package_items: new FormControl(
          "", Validators.compose([
            Validators.required,

          ])
        ),
        no_of_packages: new FormControl(
          "", Validators.compose([
            Validators.required,

          ])
        ),








      },
    );
  }


  pickup() {

    var tracking_no = new Date().getTime();

    console.log(tracking_no)
    this.params = {
      "pickupfname": this.pickupForm.controls.pickupfname.value,
      "pickuplname": this.pickupForm.controls.pickuplname.value,
      "pickupmobile": this.pickupForm.controls.pickupmobile.value,

      "pickupemail": this.pickupForm.controls.pickupemail.value,
      "pickupcity": this.pickupForm.controls.pickupcity.value,
      "pickupstate": this.pickupForm.controls.pickupstate.value,
      "pickupcountry": this.pickupForm.controls.pickupcountry.value,
      "pickuppostal_code": this.pickupForm.controls.pickuppostal_code.value,
      "pickupaddress": this.pickupForm.controls.pickupaddress.value,
      "pickupaddress2": this.pickupForm.controls.pickupaddress2.value,
      "WareHousefname": this.pickupForm.controls.WareHousefname.value,
      "WareHouselname": this.pickupForm.controls.WareHouselname.value,
      "WareHousemobile": this.pickupForm.controls.WareHousemobile.value,

      "WareHouseemail": this.pickupForm.controls.WareHouseemail.value,
      "WareHousecity": this.pickupForm.controls.WareHousecity.value,
      "WareHousestate": this.pickupForm.controls.WareHousestate.value,
      "WareHousecountry": this.pickupForm.controls.WareHousecountry.value,
      "WareHousepostal_code": this.pickupForm.controls.WareHousepostal_code.value,
      "WareHouseaddress": this.pickupForm.controls.WareHouseaddress.value,
      "WareHouseaddress2": this.pickupForm.controls.WareHouseaddress2.value,
      "weight": this.pickupForm.controls.weight.value,
      "length": this.pickupForm.controls.length.value,
      "width": this.pickupForm.controls.width.value,
      "height": this.pickupForm.controls.height.value,
      "package_items": this.pickupForm.controls.package_items.value,
      "no_of_packages": this.pickupForm.controls.no_of_packages.value,
      //"tracking_no": tracking_no,
      "tracking_no": "12334",
      "owner": "5f32ca5c8f33c3b541702c12",



    }
    //console.log(this.params)

    return new Promise((resolve, reject) => {
      this.http.post("https://labs.80startups.com/api/v1/1/pickup/createpickup", this.params).subscribe(result => {
        console.log("result", result);
        this.router.navigateByUrl('/dashBorad')
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
