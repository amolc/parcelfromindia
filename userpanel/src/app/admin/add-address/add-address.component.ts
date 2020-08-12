import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { from } from 'rxjs';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private userService: UserService,public formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

}
