import { Injectable } from '@angular/core';
import { User } from './user.model';
import{HttpClient , HttpHeaders} from '@angular/common/http'
  import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User={
    id:'',
  firstname:'',
  lastname:'',
  firstaddress:'',
  secondaddress:'',
  city:'',
  state:'',
  postcode:'',
  code:'',
  mobile:'',
  };

  constructor(private http: HttpClient) { }
  postUser(user: User){
    return this.http.post('',user);
  }
}

