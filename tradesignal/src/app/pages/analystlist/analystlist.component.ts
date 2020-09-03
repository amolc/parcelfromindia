import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-analystlist',
  templateUrl: './analystlist.component.html',
  styleUrls: ['./analystlist.component.css']
})
export class AnalystlistComponent implements OnInit {
  config: any;

  data: any = [];
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
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
  analystview(id) {
    this.router.navigateByUrl('/Analystview/' + id);
  }

  getdata() {
    return new Promise((resolve, reject) => {
      this.http.get("https://api.80startups.com/2/tradeAnalysts/getAllAnalyst").subscribe(result => {
        console.log("result", result);
        this.data.push(result);
        console.log(this.data[0][0])
      },
        err => {
          reject(err);
        }
      );
    });
  }
}
