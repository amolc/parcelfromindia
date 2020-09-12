import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-pickuplist',
  templateUrl: './pickuplist.component.html',
  styleUrls: ['./pickuplist.component.css']
})
export class PickuplistComponent implements OnInit {
  config: any;
  data: any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getdata(),
      this.config = {
        itemsPerPage: 10,
        currentPage: 1,

      };

  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  getdata() {
    return new Promise((resolve, reject) => {
      this.http.get("https://labs.80startups.com/api/v1/1/pickup/getallpickups").subscribe(result => {
        console.log("result", result);
        this.data = result;

      },
        err => {
          reject(err);
        }
      );
    });
  }
}