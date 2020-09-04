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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'argon-dashboard-angular';
  data: any = []
  constructor(
    public formBuilder: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.getdata();
  }
  ngOnInit() {
    this.getdata();
  }
  getdata() {
    console.log(this.route.snapshot.params.id)

    return new Promise((resolve, reject) => {


      console.log(JSON.parse(localStorage.getItem("token")).users["_id"]);
      this.http
        .get(
          "https://api.80startups.com/2/tradeAnalysts/getAnalystByuserId/" +
          JSON.parse(localStorage.getItem("token")).users["_id"]
        )
        .subscribe(
          (result) => {
            console.log("result", result);

            if (result["message"] == "no records found") {
              return alert(result["message"]);
            }
            console.log('anayst_id', result[0]._id)
            localStorage.setItem('anayst_id', result[0]._id)
            this.data.push(result);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }
}
