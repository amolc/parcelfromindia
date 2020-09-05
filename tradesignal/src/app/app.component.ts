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
    //this.getdata();
  }
  ngOnInit() {
    // if (localStorage.getItem('anayst_id'))
    // this.getdata();

  }

}
