import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../../services/auth.service";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.createRegisterForm()
  }

  createRegisterForm(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        response => {
          if(this.isRegisterSuccessful(response)) {
            console.log("aa")
            this.handleSuccessfulRegister();
          }
        },
        error => {
          this.snackBar.open('Registration failed. Please try again.', 'Close', {
            duration: 3000,
          });
        }
      );
    }
  }

  isRegisterSuccessful(response: any): boolean {
    console.log("res", response)
    return response && response.message === 'Registration successful';
  }

  handleSuccessfulRegister(): void {
    console.log("bb")
    this.snackBar.open('Register successful', 'Close', { duration: 3000 });
    this.router.navigate(['/courses']);
  }
}


