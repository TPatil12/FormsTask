import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {

  reg: any;

  ngOnInit(): void {
    this.reg = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      mobileno: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onReg(data: any) {
    
    let newUsers: string[] = JSON.parse(localStorage.getItem('users') || '[]');   
    // JSON.parse() = JSON string into a JavaScript object.
    // Retrieves existing user data from the localStorage under the key 'users' and parses it into a JavaScript array (newUsers).....
    // 'users' = 'users' is a key that stores the data of registered users....

    newUsers.push(data);  // Adds the new registration data (data) to the newUsers array.

    localStorage.setItem('users', JSON.stringify(newUsers));  
    // JSON.stringify() =  JavaScript object into a JSON string.
    // Stores the updated newUsers array back in the localStorage under the key 'users'.     
    // 'users' = 'users' is a key that stores the data of registered users....

    console.log(data);
    
  }
}
