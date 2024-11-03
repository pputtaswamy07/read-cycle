import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.scss',
})
export class DonateComponent {
  donationForm: FormGroup;
  predefinedAmounts = [10, 25, 50, 100];
  selectedAmount: number | null = null;

  constructor(private fb: FormBuilder) {
    this.donationForm = this.fb.group({
      customAmount: [''],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.donationForm.patchValue({ customAmount: '' });
  }

  onCustomAmount() {
    this.selectedAmount = null;
  }

  onSubmit() {
    if (this.donationForm.valid) {
      const amount =
        this.selectedAmount || this.donationForm.value.customAmount;
      console.log('Form submitted:', {
        ...this.donationForm.value,
        amount,
      });
      // Add your payment processing logic here
    }
  }
}
