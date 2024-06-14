import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  email: string | undefined;
  password: string | undefined;
  signupEmail: string | undefined;
  signupPassword: string | undefined;
  isSignUpVisible: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    // Handle login logic here
    console.log('Login:', this.email, this.password);
  }
  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }
}
