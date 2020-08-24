import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createsignal',
  templateUrl: './createsignal.component.html',
  styleUrls: ['./createsignal.component.css']
})
export class CreatesignalComponent implements OnInit {

  signalForm: FormGroup;
  error_messages: any = {};
  params: any;
  constructor(public formBuilder: FormBuilder,
    private http: HttpClient,
    public router: Router) {
    this.signalFormData()
  }

  ngOnInit(): void {


  }
  signalFormData() {
    this.error_messages = {
      planid: [
        { type: "required", message: 'planid is Required' },

      ],

      analystid: [
        { type: "required", message: 'analystid is Required' }
      ],
      stockname: [
        { type: "required", message: 'stockname is Required' }
      ],
      stocksymbol: [
        { type: "required", message: 'stocksymbol is Required' }
      ],
      position: [
        { type: "required", message: 'position is Required' }
      ],
      buyprice: [
        { type: "required", message: 'buyprice is Required' }
      ],
      buydatetime: [
        { type: "required", message: 'buydatatime is Required' }
      ],
      sellprice: [
        { type: "required", message: 'sellprice is Required' }
      ],
      selldatetime: [
        { type: "required", message: 'selldatetime is Required' }
      ],
      result: [
        { type: "required", message: 'result is Required' }
      ],
    };
    this.signalForm = this.formBuilder.group(
      {
        planid: new FormControl(
          "",
          Validators.compose([
            Validators.required,

          ])
        ),
        analystid: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        stockname: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        stocksymbol: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        position: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        buyprice: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        buydatetime: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        sellprice: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        selldatetime: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        result: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
      },
    );
  }
  signal() {
    this.params = {
      "planid": this.signalForm.controls.planid.value,
      "analystid": this.signalForm.controls.analystid.value,
      "stockname": this.signalForm.controls.stockname.value,
      "stocksymbol": this.signalForm.controls.stocksymbol.value,
      "position": this.signalForm.controls.position.value,
      "buyprice": this.signalForm.controls.buyprice.value,
      "buydatetime": this.signalForm.controls.buydatetime.value,
      "sellprice": this.signalForm.controls.sellprice.value,
      "selldatetime": this.signalForm.controls.selldatetime.value,
      "result": this.signalForm.controls.result.value,
    }
    return new Promise((resolve, reject) => {
      this.http.post("https://api.80startups.com/auth/loginUser/1", this.params).subscribe(result => {
        console.log(result, "result");
        //localStorage.setItem('token', JSON.stringify(result['users'].tokens))
        this.router.navigateByUrl('/dashboard');
      },
        err => {
          console.log(err);
          alert("please enter correct email and password");
        }
      );
    });
  }

}
