import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'IVF-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username = "";
  password = "";
  submited = false;

  iswrongAuth = false;


  ngOnInit() {

  }

  onSubmit(isvalid) { debugger;
    this.submited = true;
    this.username = this.username.trim();
    this.password = this.password.trim();

    if (isvalid) {
      if (this.username == "admin" && this.password == "admin")
        this.router.navigate(['admin/home/ivfCentres']);
      else if (this.username == "user" && this.password == "user")
        this.router.navigate(['ivf/home/new']);
      else this.iswrongAuth = true;
    }
  }
}

