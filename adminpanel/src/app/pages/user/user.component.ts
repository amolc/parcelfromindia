import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    return new Promise((resolve, reject) => {
      this.http.get("https://api.80startups.com/").subscribe(result => {
        console.log(result, "result");
        this.data = result;
      },
        err => {
          reject(err);
          alert("please enter correct email and password");
        }
      );
    });
  }
}
