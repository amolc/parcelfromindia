import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  styleUrls: ["./signals.component.css"],
})
export class SignalsComponent implements OnInit {
  signalsForm: FormGroup;
  error_messages: any = {};
  params: any;
  plans: any = [];

  constructor(
    public formBuilder: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.signalsFormData();
  }

  ngOnInit() {
    return new Promise((resolve, reject) => {
      console.log(JSON.parse(localStorage.getItem("token")).users["_id"]);
      this.http
        .get(
          "https://api.80startups.com/2/tradePlan/getallplansbyuserid/" +
          JSON.parse(localStorage.getItem("token")).users["_id"]
        )
        .subscribe(
          (result) => {
            console.log("result", result);
            this.plans.push(result);
            console.log(this.plans);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }
  signalsFormData() {
    this.error_messages = {
      Symbol: [{ type: "required", message: "stockSymbol is Required" }],

      EntryDateTime: [{ type: "required", message: "EntryDateTime is Required" }],
      Signal: [{ type: "required", message: "signal is Required" }],
      ExitDateTime: [
        { type: "required", message: "ExitDateTime is Required" },
      ],
      EntryPrice: [{ type: "required", message: "EntryPrice is Required" }],
      ExitPrice: [
        { type: "required", message: "ExitPrice is Required" },
      ],
      stopLoss: [{ type: "required", message: "stopLoss is Required" }],
      targetPrice: [{ type: "required", message: "targetPrice is Required" }],
      plan: [{ type: "required", message: "plan is Required" }],
      userid: [{ type: "required", message: "userid is Required" }],
    };
    this.signalsForm = this.formBuilder.group({
      Symbol: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      Signal: new FormControl("", Validators.compose([Validators.required])),
      EntryDateTime: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      ExitDateTime: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      EntryPrice: new FormControl("", Validators.compose([Validators.required])),
      ExitPrice: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      stopLoss: new FormControl("", Validators.compose([Validators.required])),

      targetPrice: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),

      plan: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),

    });
  }
  signals() {
    this.params = {
      Symbol: this.signalsForm.controls.Symbol.value,
      Signal: this.signalsForm.controls.Signal.value,
      EntryDateTime: this.signalsForm.controls.EntryDateTime.value,
      ExitDateTime: this.signalsForm.controls.ExitDateTime.value,
      EntryPrice: this.signalsForm.controls.EntryPrice.value,
      ExitPrice: this.signalsForm.controls.ExitPrice.value,
      stopLoss: this.signalsForm.controls.stopLoss.value,


      userid: JSON.parse(localStorage.getItem("token")).users["_id"],
      targetPrice: this.signalsForm.controls.targetPrice.value,
      plan_id: this.signalsForm.controls.plan.value,
    };
    console.log(this.params);
    return new Promise((resolve, reject) => {
      this.http
        .post(
          "https://api.80startups.com/tradesignals/createTradingSignals",
          this.params
        )
        .subscribe(
          (result) => {
            console.log(result, "result");
            //localStorage.setItem('token', JSON.stringify(result['users'].tokens))
            this.router.navigateByUrl("/india-stocks/" + this.params.plan_id);
          },
          (err) => {
            console.log(err);
            alert("please enter correct details");
          }
        );
    });
  }
}
