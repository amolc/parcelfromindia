import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-signaledit',
  templateUrl: './signaledit.component.html',
  styleUrls: ['./signaledit.component.css']
})
export class SignaleditComponent implements OnInit {
  config: any;
  data1: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
    };
  }

  ngOnInit(): void {
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  // onSubmit(event, id) {
  //   console.log(event.target.value)
  //   console.log(id)
  //   let obj: any = {
  //     status: event.target.value
  //   }
  onSubmit() {
    //   return new Promise((resolve, reject) => {
    //     this.http.put("https://api.80startups.com/tradeSignals/updateSignals/" + id, obj).subscribe((result) => {
    //       console.log("result", result);
    //       this.data1 = result;
    //     },
    //       (err) => {
    //         reject(err);
    //       }
    //     );
    //   });
  }
}
