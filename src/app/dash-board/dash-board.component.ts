import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {

  loginuser: any;
  name: any;

  constructor(private router: Router) {}  //  The constructor injects the Router service, which will be used for navigation

  ngOnInit(): void {

    this.loginuser = JSON.parse(localStorage.getItem('loginuser') || '[]');  //  The logged-in user's data is retrieved from the localStorage under the key 'loginuser' and parsed into a JavaScript object (loginuser).

    this.name = this.loginuser.username;  //  The name property is set to the username from the loginuser object.
  }

  logOut() {
    localStorage.removeItem('loginuser');
    this.loginuser = null;              // Clear the logged-in user data
    this.name = null;
    this.router.navigate(['/login']);   //  Uses the Angular Router service to navigate to the '/login' route.
    console.log(this.loginuser);
  }
}
