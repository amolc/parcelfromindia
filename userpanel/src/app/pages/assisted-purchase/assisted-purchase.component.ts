import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-assisted-purchase',
  templateUrl: './assisted-purchase.component.html',
  styleUrls: ['./assisted-purchase.component.css']
})
export class AssistedPurchaseComponent implements OnInit {

  purchaseForm: FormGroup;
  error_messages: any = {};
  params: any;

  constructor(
    public formBuilder: FormBuilder,
    private http: HttpClient,
    public router: Router
  ) {
    this.PurchaseFormData();
  }



  PurchaseFormData() {
    this.error_messages = {
      itemname: [{ type: 'required', message: 'Item Name is Required' }],
      options: [{ type: 'required', message: 'options is Required' }],

      item_url: [{ type: 'required', message: ' item_url  is required.' }],
      quantity: [{ type: 'required', message: 'Quantity  is required.' }],
      price: [{ type: 'required', message: 'Price  is required.' }],
      shipping_charges: [{ type: 'required', message: ' shipping_charges is required.' }],
      total_pur_charges: [{ type: 'required', message: 'total_pur_charges  is required.' }],
      total_shipping_charges: [{ type: 'required', message: ' total_shipping_charges  is required.' }],
      tax: [
        { type: 'required', message: 'tax  is required.' },

      ],

      total: [{ type: 'required', message: 'total is Required' }],
      instructions: [{ type: 'required', message: 'instructions is Required' }],



    };
    this.purchaseForm = this.formBuilder.group({
      itemname: new FormControl('', Validators.compose([Validators.required])),
      options: new FormControl('', Validators.compose([Validators.required])),

      item_url: new FormControl('', Validators.compose([Validators.required])),
      quantity: new FormControl('', Validators.compose([Validators.required])),
      price: new FormControl('', Validators.compose([Validators.required])),
      total_shipping_charges: new FormControl('', Validators.compose([Validators.required])),
      shipping_charges: new FormControl('', Validators.compose([Validators.required])),
      total_pur_charges: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      tax: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(12),
        ])
      ),
      total: new FormControl('', Validators.compose([Validators.required])),
      instructions: new FormControl('', Validators.compose([Validators.required])),




    });
  }
  ngOnInit(): void { }
  purchase() {
    this.params = {
      itemname: this.purchaseForm.controls.itemname.value,
      options: this.purchaseForm.controls.options.value,
      item_url: this.purchaseForm.controls.item_url.value,
      quantity: this.purchaseForm.controls.quantity.value,
      price: this.purchaseForm.controls.price.value,

      shipping_charges: this.purchaseForm.controls.shipping_charges.value,
      total_pur_charges: this.purchaseForm.controls.total_pur_charges.value,
      total_shipping_charges: this.purchaseForm.controls.total_shipping_charges.value,
      tax: this.purchaseForm.controls.tax.value,
      total: this.purchaseForm.controls.total.value,
      instructions: this.purchaseForm.controls.instructions.value,









    };
    console.log(this.params);
    return new Promise((resolve, reject) => {
      this.http.post("https://labs.80startups.com/api/v1/1/shipment/createshipment", this.params).subscribe(result => {
        console.log("result", result);
        this.router.navigateByUrl('/dashboard')
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
