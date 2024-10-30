import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  [x: string]: any;
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string | null = null;

  onSubmit(): void {
    const rawForm = this.form.getRawValue();
    this.authService.login(rawForm.email, rawForm.password).subscribe({
      next: () => {
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        this.errorMessage = err.code;
      },
    });
  }

  navigateToSignUp() {
    this.router.navigateByUrl('/signup');
  }
}
