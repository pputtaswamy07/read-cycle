import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  signupEmail: string | undefined;
  signupPassword: string | undefined;
  isSignUpVisible: any;

  constructor() {}

  onSignUp() {
    // Handle sign-up logic here
    console.log('Sign Up:', this.signupEmail, this.signupPassword);
  }
}
