import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signaledit',
  templateUrl: './signaledit.component.html',
  styleUrls: ['./signaledit.component.css']
})
export class SignaleditComponent implements OnInit {
  // config: any;
  data1: any;
  myForm: NgForm
  error_messages: any = {};
  params: any;
  plans: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.config = {
    //   itemsPerPage: 10,
    //   currentPage: 1,
    // };
  }

  ngOnInit(): void {

  }
  // pageChanged(event) {
  //   this.config.currentPage = event;
  // }
  // onSubmit(event, id) {
  //   console.log(event.target.value)
  //   console.log(id)
  //   let obj: any = {
  //     status: event.target.value
  //   }

  onSubmit(event, id) {
    let obj: any = {
      status: event.target.value
    }
    this.params = {
      Symbol: this.myForm.controls.Symbol.value,
      Signal: this.myForm.controls.Signal.value,
      EntryDateTime: this.myForm.controls.EntryDateTime.value,
      ExitDateTime: this.myForm.controls.ExitDateTime.value,
      EntryPrice: this.myForm.controls.EntryPrice.value,
      ExitPrice: this.myForm.controls.ExitPrice.value,
      stopLoss: this.myForm.controls.stopLoss.value,


      userid: JSON.parse(localStorage.getItem("token")).users["_id"],
      targetPrice: this.myForm.controls.targetPrice.value,
      plan_id: this.myForm.controls.plan.value,
    };
    return new Promise((resolve, reject) => {
      this.http.put("https://api.80startups.com/tradeSignals/updateSignals/" + id, obj).subscribe((result) => {
        console.log("result", result);
        this.data1 = result;
      },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
