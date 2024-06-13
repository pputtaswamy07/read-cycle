import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  signupEmail: string | undefined;
  signupPassword: string | undefined;
  isSignUpVisible: any;

  constructor() {}

  onSignUp() {
    console.log('Sign Up:', this.signupEmail, this.signupPassword);
  }
}
