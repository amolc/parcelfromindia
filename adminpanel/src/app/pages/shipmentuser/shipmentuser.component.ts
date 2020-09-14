import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-shipmentuser',
  templateUrl: './shipmentuser.component.html',
  styleUrls: ['./shipmentuser.component.css']
})
export class ShipmentuserComponent implements OnInit {

  data: any;

  config: any;
  constructor(private http: HttpClient) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,

    };
  }

  ngOnInit(): void {
    this.getdata();
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  getdata() {
    return new Promise((resolve, reject) => {
      // var baseurl = "https://api.80startups.com";
      // var apiurl = "/user/getAllUsers/" + 2;
      // var curl = baseurl + apiurl;
      // console.log(curl);
      this.http.get("https://labs.80startups.com/api/v1/1/shipment/getallshipment?limit=100").subscribe(result => {
        console.log(result, "result");
        this.data = result;
      },
        err => {
          reject(err);
          alert("please enter correct field");
        }
      );
    });
  }
}
