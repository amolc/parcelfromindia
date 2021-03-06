import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: any;
  analystid: any;
  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location, private element: ElementRef, private router: Router) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.user = JSON.parse(localStorage.getItem('token')).users
    console.log(this.user)

    this.analystid = localStorage.getItem('anayst_id')
    console.log(this.analystid)
  }
  Analystconsole() {
    console.log("Analystconsole")
    console.log('/Analystview/' + localStorage.getItem('anayst_id'))
    this.router.navigateByUrl('/Analystview/' + localStorage.getItem('anayst_id'));
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('anayst_id')
    this.router.navigateByUrl('/login')
  }

}
