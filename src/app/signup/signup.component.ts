// signup.component.ts
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

  constructor(private router: Router) {}

  signup() {
    // Create a user object
    const user = {
      username: this.username,
      password: this.password,
      email: this.email,
      phone: this.phone
    };

    // Store the user in local storage
    localStorage.setItem(this.username, JSON.stringify(user));
    console.log("success");

    // Redirect to the home page or desired route
    this.router.navigate(["/conversion"]);
  }
}



// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {
//   email: string = '';
//   name: string = '';
//   phoneNumber: string = '';
//   password: string = '';

//   constructor(private router: Router) {}

//   signup() {

//     const user = {
//       email: this.email,
//       name: this.name,
//       phoneNumber: this.phoneNumber
//     };
//     localStorage.setItem('currentUser', JSON.stringify(user));
//     this.router.navigate(['/home']);
//   }

//   isValidForm() {
//     return this.email && this.name && this.phoneNumber && this.password;
//   }
// }

