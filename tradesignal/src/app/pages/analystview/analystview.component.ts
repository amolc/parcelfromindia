import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-analystview",
  templateUrl: "./analystview.component.html",
  styleUrls: ["./analystview.component.css"],
})
export class AnalystviewComponent implements OnInit {
  data: any = [];
  data1: any = [];
  public Anayst_id: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getdata();
    this.getdata1();
    //this.getdata1();
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.Anayst_id = this.route.snapshot.params.id;
    console.log(this.Anayst_id);
  }
  plans(_id) {
    // this.router.navigate(["/Creatplan/", id]);
    //this.router.navigate(["/india-stocks"]);
    console.log(_id);
    this.router.navigateByUrl("/india-stocks/" + _id);
  }
  getdata() {
    console.log(this.route.snapshot.params.id)
    return new Promise((resolve, reject) => {
      console.log(this.Anayst_id);
      console.log(JSON.parse(localStorage.getItem("token")).users["_id"]);
      this.http
        .get(
          "https://api.80startups.com/2/tradeAnalysts/getAnalystByOwnId/" +
          this.route.snapshot.params.id
        )
        .subscribe(
          (result) => {
            console.log("result", result);

            if (result["message"] == "no records found") {
              return alert(result["message"]);
            }

            this.data.push(result);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }
  getdata1() {
    return new Promise((resolve, reject) => {
      //console.log(this.Anayst_id)
      //console.log(JSON.parse(localStorage.getItem('token')).users['_id'])
      this.http
        .get("https://api.80startups.com/2/tradePlan/getallplansbyuserid/" + JSON.parse(localStorage.getItem('token')).users['_id'])
        .subscribe(
          (result) => {
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
