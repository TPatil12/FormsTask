import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  
  login: any;
  users: any;
  user: any;

  constructor(private router: Router) {}  //  The constructor injects the Router service, which will be used for navigation.

  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit(result: any) {
    // {email:tushar, password:123}
    this.users = JSON.parse(localStorage.getItem('users') || '[]');  // Retrieves user data from the localStorage under the key 'users' and parses it into a JavaScript array (users). //  '[]' =  even if no user data is stored, it won't throw an error.
    // console.log(this.users[1].email);
    // console.log(this.users[1].password);

    for (let i = 0; i < this.users.length; i++) {  // Loop iterates over each user object stored in the  this.users  array.
      console.log(' user ' + i + ' - ' + this.users[i].email);
      console.log(' user ' + i + ' - ' + this.users[i].password);

      if ( result.email == this.users[i].email && result.password == this.users[i].password )   //  Compares the email and password entered in the form (result.email and result.password) with the email and password of the current user object in the loop (this.users[i].email and this.users[i].password).
      {
        this.user = this.users[i];   // If both the email and password match for a user in the array, this means the login attempt is successful.... 
        console.log(this.user);

        alert('Login Successful....');

        localStorage.setItem('loginuser', JSON.stringify(this.user));  // Stores the user's data in the localStorage under the key 'loginuser' as a stringified JSON object.
        this.router.navigate(['/dashboard']);   //  Uses the Angular Router service to navigate to the '/dashboard' route.

        break;  //  exit the loop since a match has been found.
      } 
      else {
        alert('Invalid Credentials');
      }
    }
  }
}
