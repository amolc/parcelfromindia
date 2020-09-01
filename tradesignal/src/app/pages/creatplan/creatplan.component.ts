import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-creatplan',
  templateUrl: './creatplan.component.html',
  styleUrls: ['./creatplan.component.css']
})
export class CreatplanComponent implements OnInit {
  data: any;
  config: any;
  constructor(private http: HttpClient, private router: Router,
    private route: ActivatedRoute,) {
    this.getdata();
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
    this.data = []
    return new Promise((resolve, reject) => {

      console.log(JSON.parse(localStorage.getItem('token')).users['_id'])
      this.http.get("https://api.80startups.com/2/tradePlan/getallplansbyuserid/" + JSON.parse(localStorage.getItem('token')).users['_id']).subscribe(result => {
        console.log("result", result);

        if (result['message'] == "no records found") {
          return alert(result['message'])
        }

        this.data = result;


      },
        err => {
          reject(err);
        }
      );
    });
  }
}
