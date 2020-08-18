import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
tokens:any
  constructor(private http: HttpClient,
    public router: Router) { }

  ngOnInit(): void {
  }
dologout(){



return new Promise((resolve, reject) => {
  this.http.post("https://api.80startups.com/auth/logout/", localStorage.getItem('tokens')).subscribe(result => {
    console.log("result", result);
    this.router.navigateByUrl('/login')
  },
    err => {
      console.log(err);
      alert("please try again" );
      // reject(err);
    }
  );
});
}
}
