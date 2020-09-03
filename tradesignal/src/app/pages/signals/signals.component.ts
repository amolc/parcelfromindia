import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent implements OnInit {
  signalsForm: FormGroup;
  error_messages: any = {};
  params: any;
  plans: any = [];

  constructor(public formBuilder: FormBuilder,
    private http: HttpClient,
    public router: Router, private route: ActivatedRoute,) {
    this.signalsFormData()
  }

  ngOnInit() {
    return new Promise((resolve, reject) => {

      console.log(JSON.parse(localStorage.getItem('token')).users['_id'])
      this.http.get("https://api.80startups.com/2/tradePlan/getallplansbyuserid/" + this.route.snapshot.params.id).subscribe(result => {
        console.log("result", result);
        this.plans.push(result)
        console.log(this.plans)



      },
        err => {
          reject(err);
        }
      );
    });
  }
  signalsFormData() {
    this.error_messages = {
      stockSymbol: [
        { type: "required", message: 'stockSymbol is Required' },

      ],

      stockName: [
        { type: "required", message: 'stockname is Required' }
      ],
      stockSignal: [
        { type: "required", message: 'stocksignal is Required' }
      ],
      tradingViewSymbol: [
        { type: "required", message: 'tradingviewsymbol is Required' }
      ],
      category: [
        { type: "required", message: 'category is Required' }
      ],
      category_name_hyphen: [
        { type: "required", message: 'category_name_hyphen is Required' }
      ],
      stopLoss: [
        { type: "required", message: 'stopLoss is Required' }
      ],
      type: [
        { type: "required", message: 'type is Required' }
      ],
      dateTime: [
        { type: "required", message: 'dateTime is Required' }
      ],
      status: [
        { type: "required", message: 'status is Required' }
      ],
      message: [
        { type: "required", message: 'message is Required' }
      ],
      price: [
        { type: "required", message: 'price is Required' }
      ],
      targetPrice: [
        { type: "required", message: 'targetPrice is Required' }
      ],
      plan: [
        { type: "required", message: 'plan is Required' }
      ],
    };
    this.signalsForm = this.formBuilder.group(
      {
        stockSymbol: new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),
        stockName: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        stockSignal: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        tradingViewSymbol: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        category: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        category_name_hyphen: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        stopLoss: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        type: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        dateTime: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        status: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        message: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        price: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        targetPrice: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        plan: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),

      },
    );
  }
  signals() {
    this.params = {
      "stockSymbol": this.signalsForm.controls.stockSymbol.value,
      "stockName": this.signalsForm.controls.stockName.value,
      "stockSignal": this.signalsForm.controls.stockSignal.value,
      "tradingViewSymbol": this.signalsForm.controls.tradingViewSymbol.value,
      "category": this.signalsForm.controls.category.value,
      "category_name_hyphen": this.signalsForm.controls.category_name_hyphen.value,
      "stopLoss": this.signalsForm.controls.stopLoss.value,
      "type": this.signalsForm.controls.type.value,
      "dateTime": this.signalsForm.controls.dateTime.value,
      "status": this.signalsForm.controls.status.value,
      "message": this.signalsForm.controls.message.value,
      "price": this.signalsForm.controls.price.value,
      "targetPrice": this.signalsForm.controls.targetPrice.value,
      "plan": this.signalsForm.controls.plan.value,
    }
    console.log(this.params)
    // return new Promise((resolve, reject) => {
    //   this.http.post("https://api.80startups.com/tradesignals/createTradingSignals", this.params).subscribe(result => {
    //     console.log(result, "result");
    //     //localStorage.setItem('token', JSON.stringify(result['users'].tokens))
    //     this.router.navigateByUrl('/india-stocks/' + result['id']);
    //   },
    //     err => {
    //       console.log(err);
    //       alert("please enter correct details");
    //     }
    //   );
    // });
  }
}
