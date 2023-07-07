// signup.component.ts
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {
//   username: string = '';
//   password: string = '';
//   email: string = '';
//   phone: string = '';

//   constructor(private router: Router) {}

//   signup() {
//     // Create a user object
//     const user = {
//       username: this.username,
//       password: this.password,
//       email: this.email,
//       phone: this.phone
//     };

//     // Store the user in local storage
//     localStorage.setItem(this.username, JSON.stringify(user));
//     console.log("success");

//     // Redirect to the home page or desired route
//     this.router.navigate(["/conversion"]);
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  phone: string = '';
  passwordRepeat: string = ''; // Add this line

  constructor(private router: Router) {}

  signup() {
    // Check if the passwords match
    if (this.password !== this.passwordRepeat) {
      console.log("Passwords do not match");
      return;
    }

    // Create a user object
    const user = {
      username: this.username,
      password: this.password,
      email: this.email,
      phone: this.phone
    };

    // Store the user in local storage
    localStorage.setItem(this.username, JSON.stringify(user));
    console.log("Success");

    // Redirect to the home page or desired route
    this.router.navigate(['/login']);
  }
}
